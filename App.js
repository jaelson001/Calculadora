import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
    const [operador, setOperador] = useState('+');  
    const [total, setTotal] = useState(0);  
    const [atual, setAtual] = useState(0);  
    const [visor, setVisor] = useState(0);  

    var setOperation = (number) => {
        var res = (atual * 10) + number;
        setAtual(res);
        setVisor(visor != 0? visor+""+number: number );
    }
    var operate = (novo_operador) => {
        var res = 0;
        switch(operador){
            case "+":
                res = total + atual;
                setAtual(0);
                break;
            case "-":
                res = total - atual;
                setAtual(0);
                break;
            case "*":
                res = total * atual;
                setAtual(0);
                break;
            case "÷":
                res = total / atual;
                setAtual(0);
                break;
        }
        setTotal(res);
        setOperador(novo_operador);
        if(novo_operador == "="){
            setOperador("+");
            setAtual(0);
            setVisor(res);
        }else{
            setVisor(visor+novo_operador);
        }
    }
    function clear(){
        setAtual(0);
        setTotal(0);
        setOperador("+");
        setVisor(0);
    }
    return (
        <View style={styles.container}>
            <StatusBar style={{backgroundColor:"#afafaf", color:"#555"}} />
            <TextInput style={styles.mostrador} editable={false}>{visor}</TextInput>
            <View style={styles.teclado}>
                <TouchableOpacity style={styles.button} onPress={() => setOperation(7)}>
                    <Text style={styles.button_text}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setOperation(8)}>
                    <Text style={styles.button_text}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setOperation(9)}>
                    <Text style={styles.button_text}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => operate("-")}>
                    <Text style={styles.button_text}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setOperation(4)}>
                    <Text style={styles.button_text}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setOperation(5)}>
                    <Text style={styles.button_text}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setOperation(6)}>
                    <Text style={styles.button_text}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => operate("+")}>
                    <Text style={styles.button_text}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setOperation(1)}>
                    <Text style={styles.button_text}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setOperation(2)}>
                    <Text style={styles.button_text}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setOperation(3)}>
                    <Text style={styles.button_text}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => operate("*")}>
                    <Text style={styles.button_text}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => clear()}>
                    <Text style={styles.button_text}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setOperation(0)}>
                    <Text style={styles.button_text}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => operate("=")}>
                    <Text style={styles.button_text}>=</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => operate("÷")}>
                    <Text style={styles.button_text}>÷</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mostrador:{
    flex:1,
    flexDirection:"row",
    width:"100%",
    padding:10,
    textAlign:"right",
    fontSize:40,
    color:"#333"
  },
  totais:{
    flex:1,
    flexDirection:"row",
    width:"100%",
    padding:10,
    textAlign:"right",
    fontSize:20,
  },
  teclado:{
    flexDirection:"row",
    flexWrap:"wrap"
  },
  button:{
    backgroundColor:"#fff",
    padding:10,
    margin:0,
    width:"25%",
    alignItems:"center"
  },
  button_text:{
    color:"#333",
    backgroundColor:"#fff",
    padding:10,
    fontSize:35
  }
});
