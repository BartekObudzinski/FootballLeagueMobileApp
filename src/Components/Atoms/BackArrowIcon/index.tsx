import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { BACK_ARROW_ICON_COLOR, BACK_ARROW_ICON_SIZE } from './consts';
import { BackArrowIconProps } from './types';

export const BackArrowIcon: React.FC<BackArrowIconProps> = memo((props) => {
  const { goBack } = useNavigation();
  return (
    <AntDesign
      name="arrowleft"
      size={BACK_ARROW_ICON_SIZE}
      color={BACK_ARROW_ICON_COLOR}
      onPress={goBack}
      {...props}
    />
  );
});
