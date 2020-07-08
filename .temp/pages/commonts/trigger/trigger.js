import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro, { showLoading as _showLoading, hideLoading as _hideLoading, stopPullDownRefresh as _stopPullDownRefresh } from "@tarojs/taro-h5";
import { View, Text, PullDownRefresh } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import './trigger.less';
import { AtActionSheet, AtActionSheetItem, AtIcon } from "taro-ui";
let Trigger = class Trigger extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      value: '',
      show: false,
      delShow: false,
      startShow: false
    };
  }
  //下拉时触发的函数
  onPullDownRefresh() {
    console.log('onPullDownRefresh...........');
    _showLoading({
      title: '刷新'
    });
    setTimeout(() => {
      // 接口请求完毕后隐藏两个loading , 标题和下拉区域
      _hideLoading();
      _stopPullDownRefresh();
    }, 1000);
  }
  render() {
    const _temp = <View className="trigger_content">
                <View className={'search_box'}>
                    <View className={'search_box_left'}>
                       <Text>报警记录</Text>
                    </View>
                    <View className={'search_box_center'} onClick={() => {
          this.onSearch();
        }}>
                        <Text>所有触发器</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                    </View>
                    <View className={'search_box_right'}>
                        <AtIcon value="add" size="20" color="#426ff1" onClick={this.GoAddTriggerPage}></AtIcon>
                    </View>
                </View>
                <AtActionSheet isOpened={this.state.show} cancelText="取消" title="触发器列表" onCancel={this.handleCancel} onClose={this.handleClose}>
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure();
        }}>
                        所有触发器
                    </AtActionSheetItem>
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure();
        }}>
                        已激活
                    </AtActionSheetItem>
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure();
        }}>
                        未激活
                    </AtActionSheetItem>
                </AtActionSheet>
                <View className={'list_item_box'}>
                   <View className={'list_item'}>
                       <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                武汉大海科技设备
                            </View>
                            <View className={'list_item_top_right'}>
                                已开启
                            </View>
                       </View>
                       <View className={'list_item_center'}>
                           <View className={'list_item_center_item'}>
                                触发条件触发条件触发条件触发条件触
                            </View>
                           <View className={'list_item_center_item'}>
                               17798235471
                           </View>
                       </View>
                       <View className={'list_item_footer'}>
                          <Text onClick={this.OnEdit} className={'list_item_footer_item'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_center list_item_footer_item'}>启/停</Text><Text onClick={this.onDel} className={'list_item_footer_item'}>删除</Text>
                       </View>
                   </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                武汉大海科技设备
                            </View>
                            <View className={'list_item_top_right'}>
                                已开启
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_item'}>
                                触发条件触发条件触发条件触发条件触
                            </View>
                            <View className={'list_item_center_item'}>
                                17798235471
                            </View>
                        </View>
                        <View className={'other_list_item_center'}>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    转发设备
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    test1
                                </View>
                            </View>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    传感器
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    cgq1
                                </View>
                            </View>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    转发数值
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    ceshi2
                                </View>
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_center list_item_footer_item'}>启/停</Text><Text onClick={this.onDel} className={'list_item_footer_item'}>删除</Text>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                武汉大海科技设备
                            </View>
                            <View className={'list_item_top_right'}>
                                已开启
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_item'}>
                                触发条件触发条件触发条件触发条件触
                            </View>
                            <View className={'list_item_center_item'}>
                                17798235471
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_center list_item_footer_item'}>启/停</Text><Text onClick={this.onDel} className={'list_item_footer_item'}>删除</Text>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                武汉大海科技设备
                            </View>
                            <View className={'list_item_top_right'}>
                                已开启
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_item'}>
                                触发条件触发条件触发条件触发条件触
                            </View>
                            <View className={'list_item_center_item'}>
                                17798235471
                            </View>
                        </View>
                        <View className={'other_list_item_center'}>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    转发设备
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    test1
                                </View>
                            </View>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    传感器
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    cgq1
                                </View>
                            </View>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    转发数值
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    ceshi2
                                </View>
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_center list_item_footer_item'}>启/停</Text><Text onClick={this.onDel} className={'list_item_footer_item'}>删除</Text>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                武汉大海科技设备
                            </View>
                            <View className={'list_item_top_right'}>
                                已开启
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_item'}>
                                触发条件触发条件触发条件触发条件触
                            </View>
                            <View className={'list_item_center_item'}>
                                17798235471
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_center list_item_footer_item'}>启/停</Text><Text onClick={this.onDel} className={'list_item_footer_item'}>删除</Text>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                武汉大海科技设备
                            </View>
                            <View className={'list_item_top_right'}>
                                已开启
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_item'}>
                                触发条件触发条件触发条件触发条件触
                            </View>
                            <View className={'list_item_center_item'}>
                                17798235471
                            </View>
                        </View>
                        <View className={'other_list_item_center'}>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    转发设备
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    test1
                                </View>
                            </View>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    传感器
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    cgq1
                                </View>
                            </View>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    转发数值
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    ceshi2
                                </View>
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_center list_item_footer_item'}>启/停</Text><Text onClick={this.onDel} className={'list_item_footer_item'}>删除</Text>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                武汉大海科技设备
                            </View>
                            <View className={'list_item_top_right'}>
                                已开启
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_item'}>
                                触发条件触发条件触发条件触发条件触
                            </View>
                            <View className={'list_item_center_item'}>
                                17798235471
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_center list_item_footer_item'}>启/停</Text><Text onClick={this.onDel} className={'list_item_footer_item'}>删除</Text>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                武汉大海科技设备
                            </View>
                            <View className={'list_item_top_right'}>
                                已开启
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_item'}>
                                触发条件触发条件触发条件触发条件触
                            </View>
                            <View className={'list_item_center_item'}>
                                17798235471
                            </View>
                        </View>
                        <View className={'other_list_item_center'}>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    转发设备
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    test1
                                </View>
                            </View>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    传感器
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    cgq1
                                </View>
                            </View>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    转发数值
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    ceshi2
                                </View>
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_center list_item_footer_item'}>启/停</Text><Text onClick={this.onDel} className={'list_item_footer_item'}>删除</Text>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                武汉大海科技设备
                            </View>
                            <View className={'list_item_top_right'}>
                                已开启
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_item'}>
                                触发条件触发条件触发条件触发条件触
                            </View>
                            <View className={'list_item_center_item'}>
                                17798235471
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_center'}>启/停</Text><Text>删除</Text>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                武汉大海科技设备
                            </View>
                            <View className={'list_item_top_right'}>
                                已开启
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_item'}>
                                触发条件触发条件触发条件触发条件触
                            </View>
                            <View className={'list_item_center_item'}>
                                17798235471
                            </View>
                        </View>
                        <View className={'other_list_item_center'}>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    转发设备
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    test1
                                </View>
                            </View>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    传感器
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    cgq1
                                </View>
                            </View>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    转发数值
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    ceshi2
                                </View>
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_center list_item_footer_item'}>启/停</Text><Text onClick={this.onDel} className={'list_item_footer_item'}>删除</Text>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                武汉大海科技设备
                            </View>
                            <View className={'list_item_top_right'}>
                                已开启
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_item'}>
                                触发条件触发条件触发条件触发条件触
                            </View>
                            <View className={'list_item_center_item'}>
                                17798235471
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_center list_item_footer_item'}>启/停</Text><Text onClick={this.onDel} className={'list_item_footer_item'}>删除</Text>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                武汉大海科技设备
                            </View>
                            <View className={'list_item_top_right'}>
                                已开启
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_item'}>
                                触发条件触发条件触发条件触发条件触
                            </View>
                            <View className={'list_item_center_item'}>
                                17798235471
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_center list_item_footer_item'}>启/停</Text><Text onClick={this.onDel} className={'list_item_footer_item'}>删除</Text>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                武汉大海科技设备
                            </View>
                            <View className={'list_item_top_right'}>
                                已开启
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_item'}>
                                触发条件触发条件触发条件触发条件触
                            </View>
                            <View className={'list_item_center_item'}>
                                17798235471
                            </View>
                        </View>
                        <View className={'other_list_item_center'}>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    转发设备
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    test1
                                </View>
                            </View>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    传感器
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    cgq1
                                </View>
                            </View>
                            <View className={'other_list_item_center_item'}>
                                <View className={'.other_list_item_center_item_left'}>
                                    转发数值
                                </View>
                                <View className={'.other_list_item_center_item_right'}>
                                    ceshi2
                                </View>
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_center list_item_footer_item'}>启/停</Text><Text onClick={this.onDel} className={'list_item_footer_item'}>删除</Text>
                        </View>
                    </View>
                    <View className={'list_footer'}>
                        暂无更多数据
                    </View>
                    <AtActionSheet isOpened={this.state.delShow} cancelText="取消" title="确定要删除吗">
                        <AtActionSheetItem onClick={this.onDelHandleSure}>
                            确定
                        </AtActionSheetItem>
                    </AtActionSheet>
                    <AtActionSheet isOpened={this.state.startShow} cancelText="取消" title="确定要启用或暂停吗?">
                        <AtActionSheetItem onClick={this.onStartHandleSure}>
                            确定
                        </AtActionSheetItem>
                    </AtActionSheet>
                </View>
            </View>;

    return <PullDownRefresh onRefresh={this.onPullDownRefresh && this.onPullDownRefresh.bind(this)} ref={ref => {
      if (ref) this.pullDownRefreshRef = ref;
    }}>{_temp}</PullDownRefresh>;
  }
  config = {
    enablePullDownRefresh: true,
    navigationBarTitleText: '触发器'
  };
  onHandleSure = () => {
    this.setState({
      show: false
    });
  };
  handleCancel = () => {
    this.setState({
      show: false
    });
  };
  handleClose = () => {
    this.setState({
      show: false
    });
  };
  onSearch = () => {
    this.setState({
      show: true
    });
  };
  GoAddTriggerPage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/addTrigger/addTrigger'
    });
  };
  onReachBottom = () => {
    _showLoading({
      title: '加载更多'
    });
    setTimeout(() => {
      _hideLoading();
      _stopPullDownRefresh();
    }, 1000);
  };
  onDel = () => {
    this.setState({
      delShow: true
    });
  };
  onDelHandleSure = () => {
    this.setState({
      delShow: false
    });
  };
  onStartHandleSure = () => {
    this.setState({
      startShow: false
    });
  };
  onStartOrStop = () => {
    this.setState({
      startShow: true
    });
  };
  OnEdit = () => {
    Taro.navigateTo({
      url: '/pages/commonts/addTrigger/addTrigger?type=edit'
    });
  };

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
    this.pullDownRefreshRef && this.pullDownRefreshRef.bindEvent();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
    this.pullDownRefreshRef && this.pullDownRefreshRef.unbindEvent();
  }

};
Trigger = __decorate([inject('counterStore'), observer], Trigger);
export default Trigger;