import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { Text, View } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtIcon } from 'taro-ui';
import './customizeIcon.less';
let CustomizeIcon = class CustomizeIcon extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '',
      show: false
    };
  }
  render() {
    return <View className="customizeIcon_content">
                <View className={'search_box'}>
                    <View className={'search_box_left'}>
                        编辑
                    </View>
                    <View className={'search_box_center'}>
                        <Text></Text>
                    </View>
                    <View className={'search_box_right'} onClick={this.onGoImageUploadPage}>
                        添加
                    </View>
                </View>
                <View className="at-row at-row--wrap">
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                    <View className="at-col at-col-3">
                        <View className={'img_box'}>
                            <AtIcon value="clock" size="30" color="#666"></AtIcon>
                        </View>
                    </View>
                </View>
                <View className={'list_footer'}>
                    暂无更多数据
                </View>
            </View>;
  }
  config = {
    navigationBarTitleText: '自定义传感器图标'
  };
  onGoImageUploadPage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/imageUpload/imageUpload'
    });
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
CustomizeIcon = __decorate([inject('counterStore'), observer], CustomizeIcon);
export default CustomizeIcon;