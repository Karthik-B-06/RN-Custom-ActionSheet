import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const PRIMARY_COLOR = 'rgb(0,98,255)';
const WHITE = '#ffffff';
const BORDER_COLOR = '#DBDBDB';

const ActionSheet = (props) => {
  const { actionItems } = props;
  const actionSheetItems = [
    ...actionItems,
    {
      id: '#cancel',
      label: 'Cancel',
      onPress: props?.onCancel
    }
  ]
  return (
    <View style={styles.modalContent}>
      {
        actionSheetItems.map((actionItem, index) => {
          return (
            <TouchableHighlight
              style={[
                styles.actionSheetView,
                index === 0 && {
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                },
                index === actionSheetItems.length - 2 && {
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                },
                index === actionSheetItems.length - 1 && {
                  borderBottomWidth: 0,
                  backgroundColor: WHITE,
                  marginTop: 8,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                }]}
              underlayColor={'#f7f7f7'}
              key={index} onPress={actionItem.onPress}
            >
              <Text allowFontScaling={false}
                style={[
                  styles.actionSheetText,
                  props?.actionTextColor && {
                    color: props?.actionTextColor
                  },
                  index === actionSheetItems.length - 1 && {
                    color: '#fa1616',
                  }
                ]}>
                {actionItem.label}
              </Text>
            </TouchableHighlight>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 20,
  },
  actionSheetText: {
    fontSize: 18,
    color: PRIMARY_COLOR
  },
  actionSheetView: {
    backgroundColor: WHITE,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: BORDER_COLOR
  }
});

ActionSheet.propTypes = {
  actionItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      label: PropTypes.string,
      onPress: PropTypes.func
    })
  ).isRequired,
  onCancel: PropTypes.func,
  actionTextColor: PropTypes.string
}


ActionSheet.defaultProps = {
  actionItems: [],
  onCancel: () => { },
  actionTextColor: null
}


export default ActionSheet;