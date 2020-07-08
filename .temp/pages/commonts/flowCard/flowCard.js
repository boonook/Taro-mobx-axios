import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { observer, inject } from "@tarojs/mobx-h5";
import { AtTabs, AtTabsPane } from 'taro-ui';
import BuyCard from '../../components/buyCard/buyCard';
import CardList from '../../components/cardList/cardList';
import ConsumptionList from '../../components/consumptionList/consumptionList';
import './flowCard.less';
let FlowCard = class FlowCard extends Taro.Component {
  constructor() {
    super(...arguments);

    this.state = {
      current: 0
    };
  }
  render() {
    const tabList = [{ title: '卡列表' }, { title: '消费记录' }, { title: '购买卡片' }];
    return <View className="flowCard_content">
                <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                    <AtTabsPane current={this.state.current} index={0}>
                        <View>
                            <CardList></CardList>
                        </View>
                    </AtTabsPane>
                    <AtTabsPane current={this.state.current} index={1}>
                        <View>
                            <ConsumptionList></ConsumptionList>
                        </View>
                    </AtTabsPane>
                    <AtTabsPane current={this.state.current} index={2}>
                        <View>
                            <BuyCard></BuyCard>
                        </View>
                    </AtTabsPane>
                </AtTabs>
            </View>;
  }
  config = {
    navigationBarTitleText: '流量卡'
  };
  handleClick = value => {
    this.setState({
      current: value
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
FlowCard = __decorate([inject('counterStore'), observer], FlowCard);
export default FlowCard;