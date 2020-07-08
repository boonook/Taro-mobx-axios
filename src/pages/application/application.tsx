import { ComponentType } from 'react'
import Taro, { Component,Config } from '@tarojs/taro'
import {Image, View} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './application.less'
import {AtIcon, AtSearchBar} from "taro-ui";

@inject('UserStore')
@observer
class Application extends Component {
    config: Config = {
        enablePullDownRefresh: true,//使能微信小程序的下拉刷新
        navigationBarTitleText: '应用'
    }

    state = {
        value: '',
        show: false
    };

    //下拉时触发的函数
    onPullDownRefresh() {
        console.log('onPullDownRefresh...........')
        Taro.showLoading({
            title: '刷新'
        });
        setTimeout(()=>{
            // 接口请求完毕后隐藏两个loading , 标题和下拉区域
            Taro.hideLoading();
            Taro.stopPullDownRefresh();
        },1000)
    }
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom=()=>{
        Taro.showLoading({
            title: '加载更多'
        })
        setTimeout(()=>{
            Taro.hideLoading();
            Taro.stopPullDownRefresh();
        },1000)
    }

    onChange (value) {
        this.setState({
            value: value
        })
    }

    render () {
        return (
            <View className='application_content'>
                <View className={'searchBox'}>
                    <AtSearchBar
                        value={this.state.value}
                        onChange={this.onChange.bind(this)}
                    />
                </View>
                <View className={'list_item_box'}>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage"  src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value='list' size='20' color='#666'></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage"  src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value='list' size='20' color='#666'></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage"  src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value='list' size='20' color='#666'></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage"  src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value='list' size='20' color='#666'></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage"  src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value='list' size='20' color='#666'></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage"  src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value='list' size='20' color='#666'></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage"  src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value='list' size='20' color='#666'></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage"  src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value='list' size='20' color='#666'></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage"  src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value='list' size='20' color='#666'></AtIcon>
                            </View>
                        </View>
                    </View>
                    <View className={'list_item'}>
                        <View className={'list_item_top'}>
                            <View>
                                <Image className="userImage"  src={require('../../assets/default_avatar.png')} />
                            </View>
                            <View className={'list_item_top_left'}>
                                武汉大海开机设备名称
                            </View>
                            <View className={'list_item_top_right'}>
                                待发布
                                <AtIcon className={'list_item_top_right_icon'} value='list' size='20' color='#666'></AtIcon>
                            </View>
                        </View>
                    </View>
                </View>
                <View className={'list_footer'}>
                    暂无更多数据
                </View>
            </View>
        )
    }
}

export default Application  as ComponentType
