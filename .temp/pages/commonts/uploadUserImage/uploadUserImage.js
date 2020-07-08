import Nerv from "nervjs";
import Taro, { chooseImage as _chooseImage, showToast as _showToast } from "@tarojs/taro-h5";
import { View, Image, Text } from '@tarojs/components';
import { TaroCropper } from 'taro-cropper';
import './uploadUserImage.less';
export default class UploadUserImage extends Taro.Component {
  constructor(props) {
    super(props);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */

    this.catTaroCropper = this.catTaroCropper.bind(this);
    this.state = {
      src: '',
      cutImagePath: ''
    };
  }
  catTaroCropper(node) {
    this.taroCropper = node;
  }
  render() {
    const { src, cutImagePath } = this.state;
    return <View className="uploadUserImage_content">
                <View className={'xuanze_box'}>
                    <Text onClick={() => {
          _chooseImage({
            count: 1
          }).then(res => {
            // console.log(res);
            this.setState({
              src: res.tempFilePaths[0]
            });
          });
        }}>选择图片</Text>
                </View>
                <TaroCropper height={1000} src={src} cropperWidth={400} cropperHeight={400} ref={this.catTaroCropper}
      // themeColor={'#f00'}
      // hideFinishText
      fullScreen onCut={res => {
        this.setState({
          cutImagePath: res
        });
      }} hideCancelText={false} onCancel={() => {
        _showToast({
          icon: 'none',
          title: '点击取消'
        });
      }} />
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                <Image src={cutImagePath} mode="widthFix" style={{
        width: Taro.pxTransform(400),
        height: Taro.pxTransform(400)
      }} />
            </View>;
  }
  config = {
    navigationBarTitleText: '上传头像'
  };
}