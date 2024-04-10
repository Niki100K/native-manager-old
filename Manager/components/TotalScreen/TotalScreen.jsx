import React, { useContext } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { colors } from '../../colors';
import { Storage } from '../../Storage';
import { commonStyles } from '../../commonStyles';

import no_results from '../../assets/3d/no-results.png'

import TotalScreenJS from './TotalScreenJS';
export default function TotalScreen() {
    const { orderStorage, activeOrdersInfo, orderAddNewItemIndex, orderAddNewItemsMode, correctColors } = useContext(Storage);
    const { totalItems, totalPrice, handleStorage, handleSetOrder, deleteIndex, commend, setCommend, confirmDeleteOrder, confirmSetOrder } = TotalScreenJS()
    const colorNumber = correctColors - 1

    return (
        <ScrollView style={{flex: 1}}>
            {orderStorage.length > 0 ? (
                <View>
                    <View style={commonStyles.container}>
                        {orderStorage.sort((a, b) => a.role.localeCompare(b.role)).map((info, index) => (
                            <View style={styles.card} key={index}>
                                <View style={styles.info}>
                                    <TouchableOpacity onPress={() => handleStorage('add', index, 1)} style={[commonStyles.imgCon, {width: '40%'}]}>
                                        <Image source={info.img} style={{width: '100%', height: '100%'}} />
                                    </TouchableOpacity>
                                    <View style={{width: '40%'}}>
                                        <Text style={{color: colors.white[colorNumber]}}>{info.name}</Text>
                                        <Text style={{color: colors.light[colorNumber]}}>{info.ml}</Text>
                                        <Text style={{color: colors.white[colorNumber]}}>Quantity: <Text style={{color: colors.light[colorNumber]}}>{info.quantity}</Text></Text>
                                        <Text style={{color: colors.light[colorNumber]}}>{info.price}$</Text>
                                    </View>
                                </View>
                                <View style={styles.btnContainer}>
                                    <TouchableOpacity onPress={() => handleStorage('remove', index, 1)} style={[styles.btn, {backgroundColor: colors.light[colorNumber]}]}>
                                        <Text style={[styles.btnText, {fontSize: 16, color: colors.buttonColor[colorNumber]}]}>-1</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleStorage('add', index, 5)} style={[styles.btn, {backgroundColor: colors.light[colorNumber]}]}>
                                        <Text style={[styles.btnText, {fontSize: 16, color: colors.buttonColor[colorNumber]}]}>+5</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleStorage('delete', index)} style={[styles.btn, {width: '100%', backgroundColor: deleteIndex === index ? colors.red : colors.light[colorNumber]}]}>
                                        <Text style={[styles.btnText, {fontSize: 16, color: colors.buttonColor[colorNumber]}]}>{deleteIndex === index ? 'Confirm' : 'Delete'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={{padding: 8}}>
                        <TextInput
                            style={[styles.input, {borderColor: colors.middle[colorNumber], backgroundColor: colors.dark[colorNumber], color: colors.white[colorNumber]}]}
                            value={commend}
                            onChangeText={(text) => setCommend(text)}
                            placeholder='Add Comments for order'
                            placeholderTextColor={colors.white[colorNumber]}
                        />
                    </View>
                    <View style={{padding: 8}}>
                        <View style={styles.spaceBetween}>
                            <Text style={{fontSize: 20, color: colors.white[colorNumber]}}>{orderAddNewItemsMode ? 'New Items:' : 'Items:'}</Text>
                            <Text style={{fontSize: 20, color: colors.light[colorNumber]}}>{totalItems}</Text>
                        </View>
                        {orderAddNewItemsMode &&
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: orderAddNewItemsMode ? 32 : 0}}>
                                <Text style={{fontSize: 20, color: colors.white[colorNumber]}}>Items:</Text>
                                <Text style={{color: colors.red, fontSize: 20}}>{parseInt(activeOrdersInfo[orderAddNewItemIndex].totalProducts) + totalItems}</Text>
                            </View>
                        }
                        <View style={styles.spaceBetween}>
                            <Text style={{fontSize: 20, color: colors.white[colorNumber]}}>Total:</Text>
                            <Text style={{fontSize: 20, color: colors.light[colorNumber]}}>{totalPrice.toFixed(2)}$</Text>
                        </View>
                        {orderAddNewItemsMode &&
                            <View style={styles.spaceBetween}>
                                <Text style={{fontSize: 20, color: colors.white[colorNumber]}}>Total Price:</Text>
                                <Text style={{color: colors.red, fontSize: 20}}>{(activeOrdersInfo[orderAddNewItemIndex].totalPrice + totalPrice).toFixed(2)}$</Text>
                            </View>
                        }
                    </View>
                    <View style={styles.manageButtonsContainer}>
                        <TouchableOpacity onPress={handleSetOrder} style={[styles.manageButtons, {backgroundColor: confirmSetOrder ? colors.green : colors.middle[colorNumber]}]}>
                            <Text style={styles.manageButtonsText}>{confirmSetOrder ? 'Confirm' : 'Finish'}</Text>
                        </TouchableOpacity>
                        <Text onPress={() => handleStorage('clear')} style={[styles.manageButtons, styles.manageButtonsText, {backgroundColor: confirmDeleteOrder ? colors.red : colors.white[colorNumber]}]}>{confirmDeleteOrder ? 'Confirm' : 'Clear'}</Text>
                    </View>
                </View>
            ) : (
                <View style={{marginVertical: 32, alignItems: 'center'}}>
                    <Text style={{fontSize: 32, color: colors.white[colorNumber]}}>Upsss, no items found...</Text>
                    <View style={commonStyles.imgCon}>
                        <Image source={no_results} style={{width: '100%', height: '100%'}}/>
                    </View>
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    spaceBetween: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    card: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
        borderRadius: 16,
        padding: 8,
    },
    info: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    btnContainer: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    btn: {
        width: '48%',
        borderRadius: 8,
        marginBottom: 8,
        padding: 4,
    },
    btnText: {
        textAlign: 'center',
        fontSize: 20,
    },
    manageButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        marginBottom: 64
    },
    manageButtons: {
        width: '48%',
        borderRadius: 8,
    },
    manageButtonsText: {
        textAlign: 'center',
        fontSize: 20,
        padding: 8,
    },
    input: {
        borderWidth: 2,
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderRadius: 8,
        fontSize: 18,
        letterSpacing: 1,
    },
});
