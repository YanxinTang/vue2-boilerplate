<template>
  <a-form
    id="components-form-demo-validate-other"
    :form="form"
    v-bind="formItemLayout"
    @submit="handleSubmit"
  >
    <a-form-item label="Plain Text">
      <span class="ant-form-text"> China </span>
    </a-form-item>

    <a-form-item label="InputText">
      <m-input v-decorator="['input-text']" />
    </a-form-item>

    <a-form-item label="Select" has-feedback>
      <m-select
        v-decorator="[
          'select',
          {
            rules: [{ required: true, message: 'Please select your country!' }],
          },
        ]"
        placeholder="Please select a country"
      >
        <a-select-option value="china"> China </a-select-option>
        <a-select-option value="usa"> U.S.A </a-select-option>
      </m-select>
    </a-form-item>

    <a-form-item label="Select[multiple]">
      <m-select
        v-decorator="[
          'select-multiple',
          {
            rules: [
              {
                required: true,
                message: 'Please select your favourite colors!',
                type: 'array',
              },
            ],
          },
        ]"
        mode="multiple"
        placeholder="Please select favourite colors"
      >
        <a-select-option value="red"> Red </a-select-option>
        <a-select-option value="green"> Green </a-select-option>
        <a-select-option value="blue"> Blue </a-select-option>
      </m-select>
    </a-form-item>

    <a-form-item label="InputNumber">
      <m-input-number
        v-decorator="['input-number', { initialValue: 3 }]"
        :min="1"
        :max="10"
      />
      <span class="ant-form-text"> machines </span>
    </a-form-item>

    <a-form-item label="Switch">
      <m-switch v-decorator="['switch', { valuePropName: 'checked' }]" />
    </a-form-item>

    <a-form-item label="Slider">
      <m-slider
        v-decorator="['slider']"
        :marks="{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }"
      />
    </a-form-item>

    <a-form-item label="Radio">
      <m-radio v-decorator="['radio']"> radio </m-radio>
    </a-form-item>

    <a-form-item label="RadioButton">
      <m-radio-button v-decorator="['radio-button']"> radio </m-radio-button>
    </a-form-item>

    <a-form-item label="RadioGroup.Radio">
      <m-radio-group v-decorator="['radio-group']">
        <a-radio value="a"> item 1 </a-radio>
        <a-radio value="b"> item 2 </a-radio>
        <a-radio value="c"> item 3 </a-radio>
      </m-radio-group>
    </a-form-item>

    <a-form-item label="RadioGroup.Button">
      <m-radio-group v-decorator="['radio-group-button']">
        <a-radio-button value="a"> item 1 </a-radio-button>
        <a-radio-button value="b"> item 2 </a-radio-button>
        <a-radio-button value="c"> item 3 </a-radio-button>
      </m-radio-group>
    </a-form-item>

    <a-form-item label="Checkbox">
      <m-checkbox v-decorator="['checkbox']"> checkbox </m-checkbox>
    </a-form-item>

    <a-form-item label="CheckboxGroup">
      <m-checkbox-group
        v-decorator="['checkbox-group', { initialValue: ['A', 'B'] }]"
        style="width: 100%"
      >
        <a-row>
          <a-col :span="8">
            <a-checkbox value="A"> A </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox disabled value="B"> B </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox value="C"> C </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox value="D"> D </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox value="E"> E </a-checkbox>
          </a-col>
        </a-row>
      </m-checkbox-group>
    </a-form-item>

    <a-form-item label="Rate">
      <m-rate v-decorator="['rate', { initialValue: 3.5 }]" allow-half />
    </a-form-item>

    <a-form-item label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
      <m-upload
        v-decorator="[
          'upload',
          {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          },
        ]"
        name="logo"
        action="/upload.do"
        list-type="picture"
      >
        <m-button> <a-icon type="upload" /> Click to upload </m-button>
      </m-upload>
    </a-form-item>

    <a-form-item label="Dragger">
      <div class="dropbox">
        <m-upload-dragger
          v-decorator="[
            'dragger',
            {
              valuePropName: 'fileList',
              getValueFromEvent: normFile,
            },
          ]"
          name="files"
          action="/upload.do"
        >
          <p class="ant-upload-drag-icon">
            <a-icon type="inbox" />
          </p>
          <p class="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p class="ant-upload-hint">Support for a single or bulk upload.</p>
        </m-upload-dragger>
      </div>
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
      <m-button type="primary" html-type="submit"> Submit </m-button>
    </a-form-item>
  </a-form>
</template>

<script>
import MButton from './components/MButton/index.vue';
import MInput from './components/MInput/index.vue';
import MInputNumber from './components/MInputNumber/index.vue';
import MSelect from './components/MSelect/index.vue';
import MSwitch from './components/MSwitch/index.vue';
import MSlider from './components/MSlider/index.vue';
import MRate from './components/MRate/index.vue';
import MRadio, { MRadioButton, MRadioGroup } from './components/MRadio';
import MCheckbox, { MCheckboxGroup } from './components/MCheckbox';
import MUpload, { MUploadDragger } from './components/MUpload';

export default {
  name: 'FormView',
  components: {
    MButton,
    MInput,
    MInputNumber,
    MSelect,
    MSwitch,
    MSlider,
    MRate,
    MRadio,
    MRadioButton,
    MRadioGroup,
    MCheckbox,
    MCheckboxGroup,
    MUpload,
    MUploadDragger,
  },
  data() {
    return {
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'validate_other' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    normFile(e) {
      if (Array.isArray(e)) {
        return e;
      }
      return e?.fileList;
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
