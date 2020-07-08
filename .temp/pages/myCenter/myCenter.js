import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtListItem, AtDrawer, AtIcon } from "taro-ui";
import './myCenter.less';
let MyCenter = class MyCenter extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: '',
      show: false
    };
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
  }
  componentWillMount() {}
  componentWillReact() {
    console.log('componentWillReact');
  }
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <View className="myCenterContainer">
        <View className={'userImage_box'}>
          <View className={'userImage_box_left'}>
            <Image onClick={() => {
            this.getUserInfo();
          }} className="userImage" src={require('../../assets/default_avatar.png')} />
          </View>
          <View className={'userImage_box_right'}>
             <View className={'userImage_box_right_item'}>
               boonook@163.com
             </View>
             <View className={'userImage_box_right_item'}>
               ID:200025232
             </View>
             <View className={'userImage_box_right_item'}>
               剩余短信:0条
             </View>
             <View className={'userImage_box_right_item'}>
              账户余额:0.00元
             </View>
          </View>
        </View>
        <View className={'item_group'}>
          <View className={'item_group_item'}>
            <Image onClick={() => {
            this.GobillNotesPage();
          }} className="userImage" src={require('../../assets/zhangdan.png')} />
            <View className={'myCenter_item'}>账单记录</View>
          </View>
          <View className={'item_group_item'}>
            <Image onClick={() => {
            this.GoValueAddedBuyPage();
          }} className="userImage" src={require('../../assets/zengzhibuy.png')} />
            <View className={'myCenter_item'}>增值购买</View>
          </View>
          <View className={'item_group_item'}>
            <Image onClick={() => {
            this.GoinvoiceManagePage();
          }} className="userImage" src={require('../../assets/fapiao.png')} />
            <View className={'myCenter_item'}>发票管理</View>
          </View>
          <View className={'item_group_item'}>
            <Image onClick={() => {
            this.GorechargePage();
          }} className="userImage" src={require('../../assets/chongzhi.png')} />
            <View className={'myCenter_item'}>账户充值</View>
          </View>
        </View>
        <View>
          <AtListItem className={'myCenter_item'} title="订单管理" onClick={() => {
          this.GoOrderManagePage();
        }} arrow="right" />
          <AtListItem className={'myCenter_item'} title="用户信息" onClick={() => {
          this.GoUserInfoPage();
        }} arrow="right" />
          <AtListItem className={'myCenter_item'} title="联系人管理" onClick={() => {
          this.GoContactPersonManagePage();
        }} arrow="right" />
          <AtListItem className={'myCenter_item'} title="自定义传感器图标" onClick={() => {
          this.GoCustomizeIconPage();
        }} arrow="right" />
          <AtListItem className={'myCenter_item'} title="修改密码" onClick={() => {
          this.GoEditPasswordPage();
        }} arrow="right" />
          
          
          
          <AtListItem className={'myCenter_item'} title="二维码" onClick={() => {
          this.goToQRCodePage();
        }} arrow="right" />
          <AtListItem className={'myCenter_item'} title="上传用户头像" onClick={() => {
          this.goToUploadUserImagePage();
        }} arrow="right" />
          <AtListItem className={'myCenter_item'} title="设置" onClick={() => {
          this.goToSetting();
        }} arrow="right" />
        </View>
        <AtDrawer show={this.state.show} mask right={true} width={'100%'}>
         <View className={'AtDrawer_container'}>
           <View className={'close_box'}>
             <AtIcon onClick={() => {
              this.onClose_AtDrawer();
            }} value="close" size="20" />
           </View>
           <View>
             <Image onClick={() => {
              this.getUserInfo();
            }} className="userImage" src={require('../../assets/default_avatar.png')} />
           </View>
           <AtListItem title="姓名" extraText="朱秀武" />
           <AtListItem title="邮箱" extraText="boonook@163.com" />
           <AtListItem title="性别" extraText="男" />
           <AtListItem title="地址" extraText="湖北省襄阳市宜城市" />
         </View>
        </AtDrawer>
      </View>;
  }
  config = {
    navigationBarTitleText: '用户'
  };
  goToList = () => {
    ///前往列表
    Taro.navigateTo({
      url: '/pages/commonts/handleList/handleList'
    });
  };
  goToSetting = () => {
    ///前往设置界面
    Taro.navigateTo({
      url: '/pages/commonts/setting/setting'
    });
  };
  getUserInfo = () => {
    ///个人信息
    this.setState({
      show: true
    });
  };
  onClose_AtDrawer = () => {
    ///关闭抽屉
    this.setState({
      show: false
    });
  };
  GobillNotesPage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/billNotes/billNotes'
    });
  };
  GoValueAddedBuyPage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/valueAddedBuy/valueAddedBuy'
    });
  };
  GoinvoiceManagePage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/invoiceManage/invoiceManage'
    });
  };
  GorechargePage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/recharge/recharge'
    });
  };
  GoOrderManagePage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/orderManage/orderManage'
    });
  };
  GoUserInfoPage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/userInfo/userInfo'
    });
  };
  GoContactPersonManagePage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/contactPersonManage/contactPersonManage'
    });
  };
  GoCustomizeIconPage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/customizeIcon/customizeIcon'
    });
  };
  GoEditPasswordPage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/editPassword/editPassword'
    });
  };
  goToQRCodePage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/qRCode/qRCode'
    });
  };
  goToUploadUserImagePage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/UploadUserImage/UploadUserImage'
    });
  };
};
MyCenter = __decorate([inject('counterStore'), observer], MyCenter);
export default MyCenter;