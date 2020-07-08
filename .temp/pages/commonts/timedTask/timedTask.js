import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro, { showLoading as _showLoading, hideLoading as _hideLoading, stopPullDownRefresh as _stopPullDownRefresh } from "@tarojs/taro-h5";
import { View, Text, PullDownRefresh } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtActionSheet, AtActionSheetItem, AtIcon, AtSearchBar } from 'taro-ui';
import './timedTask.less';
let TimedTask = class TimedTask extends Taro.Component {
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
  onChange(value) {
    this.setState({
      value: value
    });
  }
  render() {
    const _temp = <View className="timedTask_content">
                <View className={'search_box'}>
                    <View className={'search_box_left'}>

                    </View>
                    <View className={'search_box_center'} onClick={() => {
          this.onSearch();
        }}>
                        <Text>所有定时任务</Text>{this.state.show === false ? <AtIcon value="chevron-down" size="20" color="#666"></AtIcon> : <AtIcon value="chevron-up" size="20" color="#666"></AtIcon>}
                    </View>
                    <View className={'search_box_right'}>
                        <AtIcon value="add" size="20" color="#426ff1" onClick={this.GoAddTimedTaskPage}></AtIcon>
                    </View>
                </View>
                <View>
                    <AtSearchBar value={this.state.value} onChange={this.onChange.bind(this)} />
                </View>
                <AtActionSheet isOpened={this.state.show} cancelText="取消" title="定时任务" onCancel={this.handleCancel} onClose={this.handleClose}>
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure();
        }}>
                        所有定时任务
                    </AtActionSheetItem>
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure();
        }}>
                        运行中
                    </AtActionSheetItem>
                    <AtActionSheetItem onClick={() => {
          this.onHandleSure();
        }}>
                        已停止
                    </AtActionSheetItem>
                </AtActionSheet>
                <View className={'list_item_box'}>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                ceshi2:cgq1
                            </View>
                            <View className={'list_item_top_right'}>
                                运行中
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                执行方式：
                            </View>
                            <View className={'list_item_center_right'}>
                                执行一次
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                执行时间：
                            </View>
                            <View className={'list_item_center_right'}>
                                星期日，6时5分30秒
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                设备协议：
                            </View>
                            <View className={'list_item_center_right'}>
                                mqtt
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                发送内容：
                            </View>
                            <View className={'list_item_center_right'}>
                                ceshi-----
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item_title'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_item list_item_footer_item_title'}>启/停</Text><Text onClick={this.onGoTimedTaskDetailPage} className={'list_item_footer_item_title'}>详情</Text><Text onClick={this.onDel} className={'list_item_footer_item list_item_footer_item_title'}>删除</Text>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                ceshi2:cgq1
                            </View>
                            <View className={'list_item_top_right'}>
                                运行中
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                执行方式：
                            </View>
                            <View className={'list_item_center_right'}>
                                执行一次
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                执行时间：
                            </View>
                            <View className={'list_item_center_right'}>
                                星期日，6时5分30秒
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                设备协议：
                            </View>
                            <View className={'list_item_center_right'}>
                                mqtt
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                发送内容：
                            </View>
                            <View className={'list_item_center_right'}>
                                ceshi-----
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item_title'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_item list_item_footer_item_title'}>启/停</Text><Text className={'list_item_footer_item_title'}>详情</Text><Text onClick={this.onDel} className={'list_item_footer_item list_item_footer_item_title'}>删除</Text>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                ceshi2:cgq1
                            </View>
                            <View className={'list_item_top_right'}>
                                运行中
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                执行方式：
                            </View>
                            <View className={'list_item_center_right'}>
                                执行一次
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                执行时间：
                            </View>
                            <View className={'list_item_center_right'}>
                                星期日，6时5分30秒
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                设备协议：
                            </View>
                            <View className={'list_item_center_right'}>
                                mqtt
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                发送内容：
                            </View>
                            <View className={'list_item_center_right'}>
                                ceshi-----
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item_title'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_item list_item_footer_item_title'}>启/停</Text><Text className={'list_item_footer_item_title'}>详情</Text><Text onClick={this.onDel} className={'list_item_footer_item list_item_footer_item_title'}>删除</Text>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                ceshi2:cgq1
                            </View>
                            <View className={'list_item_top_right'}>
                                运行中
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                执行方式：
                            </View>
                            <View className={'list_item_center_right'}>
                                执行一次
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                执行时间：
                            </View>
                            <View className={'list_item_center_right'}>
                                星期日，6时5分30秒
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                设备协议：
                            </View>
                            <View className={'list_item_center_right'}>
                                mqtt
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                发送内容：
                            </View>
                            <View className={'list_item_center_right'}>
                                ceshi-----
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item_title'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_item list_item_footer_item_title'}>启/停</Text><Text className={'list_item_footer_item_title'}>详情</Text><Text onClick={this.onDel} className={'list_item_footer_item list_item_footer_item_title'}>删除</Text>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                ceshi2:cgq1
                            </View>
                            <View className={'list_item_top_right'}>
                                运行中
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                执行方式：
                            </View>
                            <View className={'list_item_center_right'}>
                                执行一次
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                执行时间：
                            </View>
                            <View className={'list_item_center_right'}>
                                星期日，6时5分30秒
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                设备协议：
                            </View>
                            <View className={'list_item_center_right'}>
                                mqtt
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                发送内容：
                            </View>
                            <View className={'list_item_center_right'}>
                                ceshi-----
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item_title'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_item list_item_footer_item_title'}>启/停</Text><Text className={'list_item_footer_item_title'}>详情</Text><Text onClick={this.onDel} className={'list_item_footer_item list_item_footer_item_title'}>删除</Text>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View className={'list_item_top_left'}>
                                ceshi2:cgq1
                            </View>
                            <View className={'list_item_top_right'}>
                                运行中
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                执行方式：
                            </View>
                            <View className={'list_item_center_right'}>
                                执行一次
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                执行时间：
                            </View>
                            <View className={'list_item_center_right'}>
                                星期日，6时5分30秒
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                设备协议：
                            </View>
                            <View className={'list_item_center_right'}>
                                mqtt
                            </View>
                        </View>
                        <View className={'list_item_center'}>
                            <View className={'list_item_center_left'}>
                                发送内容：
                            </View>
                            <View className={'list_item_center_right'}>
                                ceshi-----
                            </View>
                        </View>
                        <View className={'list_item_footer'}>
                            <Text onClick={this.OnEdit} className={'list_item_footer_item_title'}>修改</Text><Text onClick={this.onStartOrStop} className={'list_item_footer_item list_item_footer_item_title'}>启/停</Text><Text className={'list_item_footer_item_title'}>详情</Text><Text onClick={this.onDel} className={'list_item_footer_item list_item_footer_item_title'}>删除</Text>
                        </View>
                    </View>
                </View>
                <View className={'list_footer'}>
                    暂无更多数据
                </View>
                <AtActionSheet isOpened={this.state.delShow} cancelText="取消" title="确定要删除吗?">
                    <AtActionSheetItem onClick={this.onDelHandleSure}>
                        确定
                    </AtActionSheetItem>
                </AtActionSheet>
                <AtActionSheet isOpened={this.state.startShow} cancelText="取消" title="确定要启用或暂停吗?">
                    <AtActionSheetItem onClick={this.onStartHandleSure}>
                        确定
                    </AtActionSheetItem>
                </AtActionSheet>
            </View>;

    return <PullDownRefresh onRefresh={this.onPullDownRefresh && this.onPullDownRefresh.bind(this)} ref={ref => {
      if (ref) this.pullDownRefreshRef = ref;
    }}>{_temp}</PullDownRefresh>;
  }
  config = {
    enablePullDownRefresh: true,
    navigationBarTitleText: '定时任务'
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
  GoAddTimedTaskPage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/addTimedTask/addTimedTask'
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
  onGoTimedTaskDetailPage = () => {
    Taro.navigateTo({
      url: '/pages/commonts/timedTaskDetail/timedTaskDetail'
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
      url: '/pages/commonts/addTimedTask/addTimedTask?type=edit'
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
TimedTask = __decorate([inject('counterStore'), observer], TimedTask);
export default TimedTask;