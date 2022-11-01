import React from 'react';
import { Text, View,TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({
    submit,
    loader,
    disabled
}) => (
        <TouchableOpacity
            style={[styles.submitButton,disabled&&styles.disabled]}
            disabled={disabled}
            onPress={submit}
        >
          <Text style={styles.submitButtonText}> {loader?"Loading...":"Submit"} </Text>
        </TouchableOpacity>
);

export default Button;
