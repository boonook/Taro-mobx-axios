import { ComponentType } from 'react'
import Taro, { Component,Config } from '@tarojs/taro'
import {Image, View} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import {AtAccordion, AtList, AtIcon, AtSwitch, AtSearchBar} from 'taro-ui'
import './monitoringCenter.less'

@inject('UserStore')
@observer
class MonitoringCenter extends Component {
    config: Config = {
        enablePullDownRefresh: true,//使能微信小程序的下拉刷新
        navigationBarTitleText: '监控中心'
    }

    state = {
        value:false,
        show: false,
        open: false,
        open2:false,
        value2:'',
    }

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

    handleClick (value) {
        this.setState({
            open: value
        })
    }

    handleClick2=(value)=>{
        this.setState({
            open2: value
        })
    }

    handleChange = value => {
        this.setState({ value })
    }

    onChange (value) {
        this.setState({
            value2: value
        })
    }

    render () {
        return (
            <View className='monitoringCenter_content'>
                <View className={'searchBox'}>
                    <AtSearchBar
                        value={this.state.value2}
                        onChange={this.onChange.bind(this)}
                    />
                </View>
                <View className={'list_box'}>
                    <AtAccordion
                        open={this.state.open}
                        onClick={this.handleClick.bind(this)}
                        title='分类一'
                    >
                        <AtList hasBorder={false}>
                            <View className={'list_item'}>
                                <View className={'list_item_left'}>
                                    <Image className="userImage"  src={require('../../assets/default_avatar.png')} />
                                </View>
                                <View className={'list_item_center'}>
                                    cgq1
                                </View>
                                <View>
                                    <AtSwitch checked={this.state.value} onChange={this.handleChange} />
                                </View>
                                <View>
                                    <AtIcon value='chevron-right' size='20' color='#666'></AtIcon>
                                </View>
                            </View>
                            <View className={'list_item'}>
                                <View className={'list_item_left'}>
                                    <Image className="userImage"  src={require('../../assets/default_avatar.png')} />
                                </View>
                                <View className={'list_item_center'}>
                                    cgq2
                                </View>
                                <View>
                                    <AtIcon value='chevron-right' size='20' color='#666'></AtIcon>
                                </View>
                            </View>
                            <View className={'list_item'}>
                                <View className={'list_item_left'}>
                                    <Image className="userImage"  src={require('../../assets/default_avatar.png')} />
                                </View>
                                <View className={'list_item_center'}>
                                    cgq3
                                </View>
                                <View>
                                    <AtSwitch checked={this.state.value} onChange={this.handleChange} />
                                </View>
                                <View>
                                    <AtIcon value='chevron-right' size='20' color='#666'></AtIcon>
                                </View>
                            </View>
                        </AtList>
                    </AtAccordion>
                    <AtAccordion
                        open={this.state.open2}
                        onClick={this.handleClick2.bind(this)}
                        title='分类二'
                    >
                        <AtList hasBorder={false}>
                            <View className={'list_item'}>
                                <View className={'list_item_left'}>
                                    <Image className="userImage"  src={require('../../assets/default_avatar.png')} />
                                </View>
                                <View className={'list_item_center'}>
                                    cgq1
                                </View>
                                <View>
                                    <AtSwitch border={false} checked={this.state.value} onChange={this.handleChange} />
                                </View>
                                <View>
                                    <AtIcon value='chevron-right' size='20' color='#666'></AtIcon>
                                </View>
                            </View>
                            <View className={'list_item'}>
                                <View className={'list_item_left'}>
                                    <Image className="userImage"  src={require('../../assets/default_avatar.png')} />
                                </View>
                                <View className={'list_item_center'}>
                                    cgq2
                                </View>
                                <View>
                                    <AtIcon value='chevron-right' size='20' color='#666'></AtIcon>
                                </View>
                            </View>
                            <View className={'list_item'}>
                                <View className={'list_item_left'}>
                                    <Image className="userImage"  src={require('../../assets/default_avatar.png')} />
                                </View>
                                <View className={'list_item_center'}>
                                    cgq3
                                </View>
                                <View>
                                    <AtSwitch border={false} checked={this.state.value} onChange={this.handleChange} />
                                </View>
                                <View>
                                    <AtIcon value='chevron-right' size='20' color='#666'></AtIcon>
                                </View>
                            </View>
                        </AtList>
                    </AtAccordion>
                    <View className={'list_footer'}>
                        暂无更多数据
                    </View>
                </View>
            </View>
        )
    }
}

export default MonitoringCenter  as ComponentType
