import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View, Text, RadioGroup, Radio, Picker } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtIcon, AtInput } from 'taro-ui';
import './deviceInfo.less';
import address from "../../../utils/city";
let DeviceInfo = class DeviceInfo extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value2: '',
      current: 0,
      show: false,
      show2: false,
      isValue: false,
      province: '',
      city: '',
      area: '',
      pickerShow: false,
      value: [0, 0, 0],
      provinces: address.provinces,
      citys: address.citys[110000],
      areas: address.areas[110100],
      ranges: [[], [], []],
      selector: ['自定义', '60（秒）', '120（秒）', '180（秒）', '200（秒）', '220（秒）', '300（秒）'],
      selectorChecked: '自定义',
      xieyiSelector: ['MQTT', 'TCP', 'MB RTU', ' MB TCP'],
      xieyiSelectorChecked: 'MQTT'
    };
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {
    this.cityChange();
  }
  componentDidHide() {}
  columnChange(e) {
    const { provinces, citys, value } = this.state;
    const column = e.detail.column;
    const evalue = e.detail.value;
    let provinceNum = value[0];
    let cityNum = value[1];
    let countyNum = value[2];
    if (column == 0) {
      provinceNum = evalue;
      const id = provinces[provinceNum].id;
      this.setState({
        value: [provinceNum, 0, 0],
        citys: address.citys[id],
        areas: address.areas[address.citys[id][0].id]
      }, () => {
        this.cityChange();
      });
    } else if (column == 1) {
      cityNum = evalue;
      // const id = citys[cityNum].id
      // console.log(id)
      this.setState({
        value: [provinceNum, cityNum, 0],
        areas: address.areas[citys[cityNum].id]
      }, () => {
        this.cityChange();
      });
    } else {
      // 滑动选择了区
      countyNum = evalue;
      this.setState({
        value: [provinceNum, cityNum, countyNum]
      }, () => {
        this.cityChange();
      });
    }
  }
  cityChange() {
    const { provinces, citys, areas } = this.state;
    let ranges = [[], [], []];
    for (let i = 0; i < provinces.length; i++) {
      ranges[0].push(provinces[i].name);
    }
    for (let i = 0; i < citys.length; i++) {
      ranges[1].push(citys[i].name);
    }
    for (let i = 0; i < areas.length; i++) {
      ranges[2].push(areas[i].name);
    }
    this.setState({
      ranges: ranges
    });
  }
  //  params true代表传递地址，false不传递
  handlePickerShow(params, e) {
    // console.log('params', params)
    if (params) {
      const { provinces, citys, areas, value } = this.state;
      const p = provinces[value[0]].name;
      const c = citys[value[1]].name;
      const a = areas[value[2]].name;
      this.setState({
        pickerShow: !this.state.pickerShow,
        province: p || '',
        city: c || '',
        area: a || ''
      });
    }
  }
  render() {
    return <View className="deviceInfo_content">
               <View className={'input_item'}>
                   <View className={'input_item_left'}>
                        设备名称
                   </View>
                   <View className={'input_item_center'}>
                       <AtInput border={false} name={'value2'} type="text" placeholder="请输入设备名称" value={this.state.value2} onChange={this.handleChange.bind(this)} />
                   </View>
                   <View className={'input_item_right'}>
                       选择
                   </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        连接协议
                    </View>
                    <View className={'input_item_center'}>
                        <Picker mode="selector" range={this.state.xieyiSelector} onChange={this.onChangeXieYiTYPE}>
                            <View className="picker">
                                {this.state.xieyiSelectorChecked}{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                            </View>
                        </Picker>
                    </View>
                    <View className={'input_item_right'}>

                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        上报周期
                    </View>
                    <View className={'input_item_center'}>
                        <Picker mode="selector" range={this.state.selector} onChange={this.onChange}>
                            <View className="picker">
                               {this.state.selectorChecked}{this.state.show2 === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                            </View>
                        </Picker>
                    </View>
                    <View className={'input_item_right'}>
                        <Text>自定义</Text>
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        是否公开
                    </View>
                    <View className={'input_item_center'}>
                        <RadioGroup onChange={this.onRadioChange.bind(this)}>
                          <View className={'radio_box'}>
                              <View className={'radio_box_left'}>
                                  <Radio className="radio-list__radio" value={'11111'}></Radio><Text>是</Text>
                              </View>
                              <View className={'radio_box_right'}>
                                  <Radio className="radio-list__radio" value={'2222'}></Radio><Text>否</Text>
                              </View>
                          </View>
                        </RadioGroup>
                    </View>
                </View>
                <View className={'input_item'}>
                    <View className={'input_item_left'}>
                        位置
                    </View>
                    <View className={'input_item_center'}>
                        <Picker mode="multiSelector" range={this.state.ranges} onChange={this.handlePickerShow.bind(this)} onColumnChange={this.columnChange.bind(this)}>
                            <View>
                                {this.state.province && <View>{this.state.province} {this.state.city} {this.state.area}</View>}
                                {!this.state.province && <View>请选择地区</View>}
                            </View>
                        </Picker>
                    </View>
                </View>
            </View>;
  }
  config = {
    navigationBarTitleText: '设备信息'
  };
  handleChange = () => {};
  onRadioChange = value => {
    console.log(value);
  };
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value],
      show2: !this.state.show2
    });
  };
  onChangeXieYiTYPE = e => {
    this.setState({
      xieyiSelectorChecked: this.state.xieyiSelector[e.detail.value],
      show: !this.state.show
    });
  };
};
DeviceInfo = __decorate([inject('counterStore'), observer], DeviceInfo);
export default DeviceInfo;