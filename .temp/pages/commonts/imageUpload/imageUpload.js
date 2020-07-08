import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtImagePicker } from 'taro-ui';
import './imageUpload.less';
let ImageUpload = class ImageUpload extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '',
      show: false,
      files: [{
        url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg'
      }, {
        url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
      }, {
        url: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg'
      }]
    };
  }
  onChange(files) {
    this.setState({
      files
    });
  }
  render() {
    return <View className="customizeIcon_content">
                <AtImagePicker multiple length={4} mode="top" files={this.state.files} onChange={this.onChange.bind(this)} onFail={this.onFail.bind(this)} onImageClick={this.onImageClick.bind(this)} />
            </View>;
  }
  config = {
    navigationBarTitleText: '上传图标'
  };
  onFail = mes => {
    console.log(mes);
  };
  onImageClick = (index, file) => {
    console.log(index, file);
  };

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

};
ImageUpload = __decorate([inject('counterStore'), observer], ImageUpload);
export default ImageUpload;