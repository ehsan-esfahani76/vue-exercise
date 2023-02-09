<template>
  <form @submit.prevent="formValidate">
    <div class="mb-3">
      <label class="form-label">title</label>
      <input
        type="text"
        class="form-control"
        placeholder="name@example.com"
        v-model.lazy.trim="form.title"
      />
      <div v-if="form.titleError" class="form-text text-danger">
        Title is required
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">Body</label>
      <textarea
        class="form-control"
        rows="3"
        v-model.lazy.trim="form.body"
      ></textarea>
      <div v-if="form.bodyError" class="form-text text-danger">
        Body is required
      </div>
    </div>
    <button type="submit" class="btn btn-dark" :disabled="buttonLoading">
      <div
        v-if="buttonLoading"
        class="spinner-border spinner-border-sm"
        role="status"
      ></div>
      {{buttonText}}
    </button>
  </form>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  props: {
    buttonLoading: Boolean,
    post: Object,
    buttonText:String
  },
  setup(props, { emit }) {
    const form = reactive({
      title: "",
      titleError: false,
      body: "",
      bodyError: false,
    });
    function updateform(params) {
      if (props.post !== undefined) {
        form.title = props.post.title;
        form.body = props.post.body;
      }
    }
    updateform()
    function formValidate() {
      if (form.title === "") {
        form.titleError = true;
      } else {
        form.titleError = false;
      }

      if (form.body === "") {
        form.bodyError = true;
      } else {
        form.bodyError = false;
      }

      if (!form.titleError && !form.bodyError) {
        emit("formData", form);
      }
    }

    return { formValidate, form };
  },
};
</script>

<style></style>
