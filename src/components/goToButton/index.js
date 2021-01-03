import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function GoToButton({screenName,title}) {
  const navigation = useNavigation();

  return (
    <Button
      title={`${title}`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}
export default GoToButton;