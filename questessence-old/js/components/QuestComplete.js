import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BoldBodyText from './BoldBodyText';

import I18n from '../locales/i18n';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>
        <BoldBodyText>
          {I18n.t('questCompleteText')}
        </BoldBodyText>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  top: {
    marginBottom: 20,
    marginLeft: 40,
    marginRight: 40
  }
});
