import React, { Component, ReactNode, ReactElement } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export interface SwiperType {
    icon: ReactElement;
    id: any;
    onPress: (id: any) => any;
}

interface IProps {
    datas: SwiperType[];
    startIndex?: number;
    opacity?: boolean;
    style?: any;
    staticDesign?: boolean;
}

interface IState {
    activeIndex: number;
}

export class Slider extends Component<IProps, IState> {
    state: IState = {
        activeIndex: 0,
    }

    componentDidMount() {
        const { startIndex } = this.props;
        if (startIndex && startIndex > 0) {
            this.setState({
                activeIndex: startIndex,
            });
        }

    }

    renderIcon(index: number, before: boolean): ReactNode {
        const { datas, opacity, staticDesign = false, style } = this.props;
        const { activeIndex } = this.state;

        let middle: boolean = false;
        if (activeIndex === index) {
            middle = true;
        }
        return (
            <TouchableOpacity
                onPress={() => {
                    datas[index].onPress(datas[index].id);
                    this.setState({ activeIndex: index })
                }}
                disabled={middle}
                style={[
                    staticDesign ? {
                        backgroundColor: opacity ? 'rgba(255, 255, 255, 0.2)' : '#dfdfdf',
                        borderBottomLeftRadius: index === 0 ? hp(1) : hp(0),
                        borderBottomRightRadius: before || index === 1 ? hp(0) : hp(1),
                        borderTopRightRadius: before || index === 1 ? hp(0) : hp(1),
                        borderTopLeftRadius: before ? hp(1) : hp(0),
                        ...(activeIndex === index) ? styles.swiperActive : styles.swiperInactive,
                    } :
                        {
                            backgroundColor: opacity ? 'rgba(255, 255, 255, 0.2)' : '#dfdfdf',
                            borderBottomLeftRadius: before ? hp(1) : hp(0),
                            borderBottomRightRadius: before ? hp(0) : hp(1),
                            borderTopRightRadius: before ? hp(0) : hp(1),
                            borderTopLeftRadius: before ? hp(1) : hp(0),
                            ...(activeIndex === index) ? styles.swiperActive : styles.swiperInactive,
                        },
                    (style && style.ActiveItem && activeIndex === index) ? style.ActiveItem : {},
                    (style && style.InactiveItem && activeIndex !== index) ? style.InactiveItem : {},
                ]}>
                {datas[index].icon}
            </TouchableOpacity>)
    }

    render() {
        const { style, staticDesign = false } = this.props;
        const { activeIndex } = this.state;

        return (
            <View style={[styles.container, style && style.container && style.container]}>

                {!staticDesign
                    ? this.renderIcon((((activeIndex - 1) % 3) + 3) % 3, true)
                    : this.renderIcon(0, true)
                }
                {!staticDesign
                    ? this.renderIcon((activeIndex) % 3, false)
                    : this.renderIcon(1, false)
                }
                {!staticDesign
                    ? this.renderIcon((((activeIndex + 1) % 3) + 3) % 3, false)
                    : this.renderIcon(2, false)
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    swiperInactive: {
        height: hp(5.6),
        width: wp(15),
        justifyContent: 'center',
        alignItems: 'center',
    },
    swiperActive: {
        backgroundColor: '#fff',
        height: hp(7),
        width: wp(16),
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: hp(1),
        borderBottomRightRadius: hp(1),
        borderTopRightRadius: hp(1),
        borderTopLeftRadius: hp(1),
    },
});

export default Slider;
