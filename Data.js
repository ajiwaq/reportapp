import React, {Component} from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet, Image, Picker} from 'react-native';
import {Content, Container,  List, ListItem, Text, Left, Right, Icon, Card, CardItem, Body } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import allChat from './allChat';
import Day0 from './days/Day0';
import Day1 from './days/Day1';
import Day2 from './days/Day2';
import Day3 from './days/Day3';
import Day4 from './days/Day4';
import Day5 from './days/Day5';
import Day6 from './days/Day6';
import Day7 from './days/Day7';
import Day8 from './days/Day8';
import Day9 from './days/Day9';
import Day10 from './days/Day10';
import Day11 from './days/Day11';
import Day12 from './days/Day12';
import Day13 from './days/Day13';
import Day14 from './days/Day14';
import Day15 from './days/Day15';
import Day16 from './days/Day16';
import Day17 from './days/Day17';
import Day18 from './days/Day18';
import Day19 from './days/Day19';
import Day20 from './days/Day20';
import Day21 from './days/Day21';
import Day22 from './days/Day22';
import Day23 from './days/Day23';
import Day24 from './days/Day24';
import Day25 from './days/Day25';
import Day26 from './days/Day26';
import Day27 from './days/Day27';
import Day28 from './days/Day28';
import Day29 from './days/Day29';
import Day30 from './days/Day30';
import Day31 from './days/Day31';
import Day32 from './days/Day32';
import Day33 from './days/Day33';
import Day34 from './days/Day34';
import Day35 from './days/Day35';
import Day36 from './days/Day36';
import Day37 from './days/Day37';
import Day38 from './days/Day38';
import Day39 from './days/Day39';
import Day40 from './days/Day40';
import Day41 from './days/Day41';
import Day42 from './days/Day42';
export default class AppBody extends Component{
  constructor(props) {
      super(props);

      this.state = {
          dayStatus: '',
          favColor1: '',
          ourApp:false,
          stockValue:"",
          dfc1:"",
          cfc1:"",
          dfc2:"",
          cfc2:"",
          dfc3:"",
          cfc3:"",
          dfc4:"",
          cfc4:"",
          dfc5:"",
          cfc5:"",
          dfc6:"",
          cfc6:"",
          dfc7:"",
          cfc7:"",
          dfc8:"",
          cfc8:"",
          dfc9:"",
          cfc9:"",
          dfc10:"",
          cfc10:"",
          dfc11:"",
          cfc11:"",
          dfc12:"",
          cfc12:"",
          dfc13:"",
          cfc13:"",
          dfc14:"",
          cfc14:"",
          dfc15:"",
          cfc15:"",
          dfc16:"",
          cfc16:"",
          dfc17:"",
          cfc17:"",
          dfc18:"",
          cfc18:"",
          dfc19:"",
          cfc19:"",
          dfc20:"",
          cfc20:"",
          dfc21:"",
          cfc21:"",
          dfc22:"",
          cfc22:"",
          dfc23:"",
          cfc23:"",
          dfc24:"",
          cfc24:"",
          dfc25:"",
          cfc25:"",
          dfc26:"",
          cfc26:"",
          dfc27:"",
          cfc27:"",
          dfc28:"",
          cfc28:"",
          dfc29:"",
          cfc29:"",
          dfc30:"",
          cfc30:"",
          dfc31:"",
          cfc31:"",
          dfc32:"",
          cfc32:"",
          dfc33:"",
          cfc33:"",
          dfc34:"",
          cfc34:"",
          dfc35:"",
          cfc35:"",
          dfc36:"",
          cfc36:"",
          dfc37:"",
          cfc37:"",
          dfc38:"",
          cfc38:"",
          dfc39:"",
          cfc39:"",
          dfc40:"",
          cfc40:"",
          dfc41:"",
          cfc41:"",
          dfc42:"",
          cfc42:"",

          items: [
            {

                label: 'SELECT AGE OF BIRD',
                value: '',
            },
              {
                label: 'Day 0',
                value: 'Day 0',
              },
              {
                label: 'Day 1',
                value: 'Day 1',
              },
              {
                label: 'Day 2',
                value: 'Day 2',
              },
              {
                label: 'Day 3',
                value: 'Day 3',
              },
              {
                label: 'Day 4',
                value: 'Day 4',
              },
              {
                label: 'Day 5',
                value: 'Day 5',
              },
              {
                label: 'Day 6',
                value: 'Day 6',
              },
              {
                label: 'Day 7',
                value: 'Day 7',
              },
              {
                label: 'Day 8',
                value: 'Day 8',
              },
              {
                label: 'Day 9',
                value: 'Day 9',
              },
              {
                label: 'Day 10',
                value: 'Day 10',
              },
              {
                label: 'Day 11',
                value: 'Day 11',
              },
              {
                label: 'Day 12',
                value: 'Day 12',
              },
              {
                label: 'Day 13',
                value: 'Day 13',
              },
              {
                label: 'Day 14',
                value: 'Day 14',
              },
              {
                label: 'Day 15',
                value: 'Day 15',
              },
              {
                label: 'Day 16',
                value: 'Day 16',
              },
              {
                label: 'Day 17',
                value: 'Day 17',
              },
              {
                label: 'Day 18',
                value: 'Day 18',
              },
              {
                label: 'Day 19',
                value: 'Day 19',
              },
              {
                label: 'Day 20',
                value: 'Day 20',
              },
              {
                label: 'Day 21',
                value: 'Day 21',
              },
              {
                label: 'Day 22',
                value: 'Day 22',
              },
              {
                label: 'Day 23',
                value: 'Day 23',
              },
              {
                label: 'Day 24',
                value: 'Day 24',
              },
              {
                label: 'Day 25',
                value: 'Day 25',
              },
              {
                label: 'Day 26',
                value: 'Day 26',
              },
              {
                label: 'Day 27',
                value: 'Day 27',
              },
              {
                label: 'Day 28',
                value: 'Day 28',
              },
              {
                label: 'Day 29',
                value: 'Day 29',
              },
              {
                label: 'Day 30',
                value: 'Day 30',
              },
              {
                label: 'Day 31',
                value: 'Day 31',
              },
              {
                label: 'Day 32',
                value: 'Day 32',
              },
              {
                label: 'Day 33',
                value: 'Day 33',
              },
              {
                label: 'Day 34',
                value: 'Day 34',
              },
              {
                label: 'Day 35',
                value: 'Day 35',
              },
              {
                label: 'Day 36',
                value: 'Day 36',
              },
              {
                label: 'Day 37',
                value: 'Day 37',
              },
              {
                label: 'Day 38',
                value: 'Day 38',
              },
              {
                label: 'Day 39',
                value: 'Day 39',
              },
              {
                label: 'Day 40',
                value: 'Day 40',
              },
              {
                label: 'Day 41',
                value: 'Day 41',
              },
              {
                label: 'Day 42',
                value: 'Day 42',
              },

          ],
      };
  }
  onValueChange1(value: string) {
    this.setState({
      selected: value

    });
  }

  searchArray=(value)=>{
    let newStudent = allChat.filter(fresh =>{
      return fresh.id === value
      })
      this.setState({
          favColor: newStudent.feed,
      })
  }

  callStock=(valueStock)=>{
    let stock_capacity=valueStock;

    let dfc1 = (valueStock*13)/25000;
    let cfc1 = (valueStock*13)/25000;
    let dfc2 = (valueStock*16)/25000;
    let cfc2 = (valueStock*29)/25000;
    let dfc3 = (valueStock*20)/25000;
    let cfc3 = (valueStock*49)/25000;
    let dfc4 = (valueStock*23)/25000;
    let cfc4 = (valueStock*72)/25000;
    let dfc5 = (valueStock*26)/25000;
    let cfc5 = (valueStock*98)/25000;
    let dfc6 = (valueStock*30)/25000;
    let cfc6 = (valueStock*128)/25000;
    let dfc7 = (valueStock*35)/25000;
    let cfc7 = (valueStock*163)/25000;
    let dfc8 = (valueStock*38)/25000;
    let cfc8 = (valueStock*201)/25000;
    let dfc9 = (valueStock*42)/25000;
    let cfc9 = (valueStock*243)/25000;
    let dfc10 = (valueStock*47)/25000;
    let cfc10 = (valueStock*290)/25000;
    let dfc11 = (valueStock*52)/25000;
    let cfc11 = (valueStock*342)/25000;
    let dfc12 = (valueStock*57)/25000;
    let cfc12 = (valueStock*399)/25000;
    let dfc13 = (valueStock*62)/25000;
    let cfc13 = (valueStock*461)/25000;
    let dfc14 = (valueStock*67)/25000;
    let cfc14 = (valueStock*528)/25000;
    let dfc15 = (valueStock*73)/25000;
    let cfc15 = (valueStock*601)/25000;
    let dfc16 = (valueStock*78)/25000;
    let cfc16 = (valueStock*679)/25000;
    let dfc17 = (valueStock*87)/25000;
    let cfc17 = (valueStock*763)/25000;
    let dfc18 = (valueStock*90)/25000;
    let cfc18 = (valueStock*853)/25000;
    let dfc19 = (valueStock*96)/25000;
    let cfc19 = (valueStock*949)/25000;
    let dfc20 = (valueStock*102)/25000;
    let cfc20 = (valueStock*1051)/25000;
    let dfc21 = (valueStock*108)/25000;
    let cfc21 = (valueStock*1159)/25000;
    let dfc22 = (valueStock*114)/25000;
    let cfc22 = (valueStock*1273)/25000;
    let dfc23 = (valueStock*120)/25000;
    let cfc23 = (valueStock*1393)/25000;
    let dfc24 = (valueStock*126)/25000;
    let cfc24 = (valueStock*1519)/25000;
    let dfc25 = (valueStock*132)/25000;
    let cfc25 = (valueStock*1651)/25000;
    let dfc26 = (valueStock*137)/25000;
    let cfc26 = (valueStock*1788)/25000;
    let dfc27 = (valueStock*144)/25000;
    let cfc27 = (valueStock*1932)/25000;
    let dfc28 = (valueStock*148)/25000;
    let cfc28 = (valueStock*2080)/25000;
    let dfc29 = (valueStock*155)/25000;
    let cfc29 = (valueStock*2235)/25000;
    let dfc30 = (valueStock*159)/25000;
    let cfc30 = (valueStock*2394)/25000;
    let dfc31 = (valueStock*165)/25000;
    let cfc31 = (valueStock*2559)/25000;
    let dfc32 = (valueStock*170)/25000;
    let cfc32 = (valueStock*2729)/25000;
    let dfc33 = (valueStock*175)/25000;
    let cfc33 = (valueStock*2904)/25000;
    let dfc34 = (valueStock*179)/25000;
    let cfc34 = (valueStock*3083)/25000;
    let dfc35 = (valueStock*183)/25000;
    let cfc35 = (valueStock*3266)/25000;
    let dfc36 = (valueStock*188)/25000;
    let cfc36 = (valueStock*3454)/25000;
    let dfc37 = (valueStock*191)/25000;
    let cfc37 = (valueStock*3645)/25000;
    let dfc38= (valueStock*196)/25000;
    let cfc38 = (valueStock*3841)/25000;
    let dfc39 = (valueStock*198)/25000;
    let cfc39= (valueStock*4039)/25000;
    let dfc40= (valueStock*203)/25000;
    let cfc40= (valueStock*4242)/25000;
    let dfc41= (valueStock*205)/25000;
    let cfc41= (valueStock*4447)/25000;
    let dfc42= (valueStock*208)/25000;
    let cfc42= (valueStock*4655)/25000;
    this.setState({
      stockValue:stock_capacity,
      dfc1:dfc1,
      cfc1:cfc1,
      dfc2:dfc2,
      cfc2:cfc2,
      dfc3:dfc3,
      cfc3:cfc3,
      dfc4:dfc4,
      cfc4:cfc4,
      cfc5:cfc5,
      dfc5:dfc5,
      cfc6:cfc6,
      dfc6:dfc6,
      cfc7:cfc7,
      dfc7:dfc7,
      cfc8:cfc8,
      dfc8:dfc8,
      cfc9:cfc9,
      dfc9:dfc9,
      cfc10:cfc10,
      dfc10:dfc10,
      cfc11:cfc11,
      dfc11:dfc11,
      cfc12:cfc12,
      dfc12:dfc12,
      cfc13:cfc13,
      dfc13:dfc13,
      cfc14:cfc14,
      dfc14:dfc14,
      cfc15:cfc15,
      dfc15:dfc15,
      cfc16:cfc16,
      dfc16:dfc16,
      cfc17:cfc17,
      dfc17:dfc17,
      cfc18:cfc18,
      dfc18:dfc18,
      cfc19:cfc19,
      dfc19:dfc19,
      cfc20:cfc20,
      dfc20:dfc20,
      cfc21:cfc21,
      dfc21:dfc21,
      cfc22:cfc22,
      dfc22:dfc22,
      cfc23:cfc23,
      dfc23:dfc23,
      cfc24:cfc24,
      dfc24:dfc24,
      cfc25:cfc25,
      dfc25:dfc25,
      cfc26:cfc26,
      dfc26:dfc26,
      cfc27:cfc27,
      dfc27:dfc27,
      cfc28:cfc28,
      dfc28:dfc28,
      cfc29:cfc29,
      dfc29:dfc29,
      cfc30:cfc30,
      dfc30:dfc30,
      cfc31:cfc31,
      dfc31:dfc31,
      cfc32:cfc32,
      dfc32:dfc32,
      cfc33:cfc33,
      dfc33:dfc33,
      cfc34:cfc34,
      dfc34:dfc34,
      cfc35:cfc35,
      dfc35:dfc35,
      cfc36:cfc36,
      dfc36:dfc36,
      cfc37:cfc37,
      dfc37:dfc37,
      cfc38:cfc38,
      dfc38:dfc38,
      cfc39:cfc39,
      dfc39:dfc39,
      cfc40:cfc40,
      dfc40:dfc40,
      cfc41:cfc41,
      dfc41:dfc41,
      cfc42:cfc42,
      dfc42:dfc42,


    })
  }

  render(){
    var dayResult
    if(this.state.dayStatus === "Day 0"){
      dayResult= <Day0 />
    }
    else if(this.state.dayStatus === "Day 1"){
      dayResult= <Day1 dfc1={this.state.dfc1} cfc1={this.state.cfc1}/>
    }
    else if(this.state.dayStatus === "Day 2"){
      dayResult= <Day2 dfc2={this.state.dfc2} cfc2={this.state.cfc2} />
    }
    else if(this.state.dayStatus === "Day 3"){
      dayResult= <Day3 dfc3={this.state.dfc3} cfc3={this.state.cfc3} />
    }
    else if(this.state.dayStatus === "Day 4"){
      dayResult= <Day4 dfc4={this.state.dfc4} cfc4={this.state.cfc4} />
    }
    else if(this.state.dayStatus === "Day 5"){
      dayResult= <Day5 dfc5={this.state.dfc5} cfc5={this.state.cfc5} />
    }
    else if(this.state.dayStatus === "Day 6"){
      dayResult= <Day6 dfc6={this.state.dfc6} cfc6={this.state.cfc6} />
    }
    else if(this.state.dayStatus === "Day 7"){
      dayResult= <Day7 dfc7={this.state.dfc7} cfc7={this.state.cfc7} />
    }
    else if(this.state.dayStatus === "Day 8"){
      dayResult= <Day8 dfc8={this.state.dfc8} cfc8={this.state.cfc8} />
    }
    else if(this.state.dayStatus === "Day 9"){
      dayResult= <Day9 dfc9={this.state.dfc9} cfc9={this.state.cfc9} />
    }
    else if(this.state.dayStatus === "Day 10"){
      dayResult= <Day10 dfc10={this.state.dfc10} cfc10={this.state.cfc10}/>
    }
    else if(this.state.dayStatus === "Day 11"){
      dayResult= <Day11 dfc11={this.state.dfc11} cfc11={this.state.cfc11} />
    }
    else if(this.state.dayStatus === "Day 12"){
      dayResult= <Day12 dfc12={this.state.dfc12} cfc12={this.state.cfc12}/>
    }
    else if(this.state.dayStatus === "Day 13"){
      dayResult= <Day13 dfc13={this.state.dfc13} cfc13={this.state.cfc13} />
    }
    else if(this.state.dayStatus === "Day 14"){
      dayResult= <Day14 dfc14={this.state.dfc14} cfc14={this.state.cfc14} />
    }
    else if(this.state.dayStatus === "Day 15"){
      dayResult= <Day15 dfc15={this.state.dfc15} cfc15={this.state.cfc15} />
    }
    else if(this.state.dayStatus === "Day 16"){
      dayResult= <Day16 dfc16={this.state.dfc16} cfc16={this.state.cfc16}/>
    }
    else if(this.state.dayStatus === "Day 17"){
      dayResult= <Day17 dfc17={this.state.dfc17} cfc17={this.state.cfc17} />
    }
    else if(this.state.dayStatus === "Day 18"){
      dayResult= <Day18 dfc18={this.state.dfc18} cfc18={this.state.cfc18} />
    }
    else if(this.state.dayStatus === "Day 19"){
      dayResult= <Day19 dfc19={this.state.dfc19} cfc1={this.state.cfc19}/>
    }
    else if(this.state.dayStatus === "Day 20"){
      dayResult= <Day20 dfc20={this.state.dfc20} cfc20={this.state.cfc20}/>
    }
    else if(this.state.dayStatus === "Day 21"){
      dayResult= <Day21 dfc21={this.state.dfc21} cfc21={this.state.cfc21} />
    }
    else if(this.state.dayStatus === "Day 22"){
      dayResult= <Day22 dfc22={this.state.dfc22} cfc22={this.state.cfc22}/>
    }
    else if(this.state.dayStatus === "Day 23"){
      dayResult= <Day23 dfc23={this.state.dfc23} cfc23={this.state.cfc23}/>
    }
    else if(this.state.dayStatus === "Day 24"){
      dayResult= <Day24 dfc24={this.state.dfc24} cfc24={this.state.cfc24} />
    }
    else if(this.state.dayStatus === "Day 25"){
      dayResult= <Day25 dfc25={this.state.dfc25} cfc25={this.state.cfc25}/>
    }
    else if(this.state.dayStatus === "Day 26"){
      dayResult= <Day26 dfc26={this.state.dfc26} cfc26={this.state.cfc26}/>
    }
    else if(this.state.dayStatus === "Day 27"){
      dayResult= <Day27 dfc27={this.state.dfc27} cfc27={this.state.cfc27}/>
    }
    else if(this.state.dayStatus === "Day 28"){
      dayResult= <Day28 dfc28={this.state.dfc28} cfc28={this.state.cfc28}/>
    }
    else if(this.state.dayStatus === "Day 29"){
      dayResult= <Day29 dfc29={this.state.dfc29} cfc29={this.state.cfc29}/>
    }
    else if(this.state.dayStatus === "Day 30"){
      dayResult= <Day30 dfc30={this.state.dfc30} cfc30={this.state.cfc30}/>
    }
    else if(this.state.dayStatus === "Day 31"){
      dayResult= <Day31 dfc31={this.state.dfc31} cfc31={this.state.cfc31}/>
    }
    else if(this.state.dayStatus === "Day 32"){
      dayResult= <Day32 dfc32={this.state.dfc32} cfc32={this.state.cfc32}/>
    }
    else if(this.state.dayStatus === "Day 33"){
      dayResult= <Day33 dfc33={this.state.dfc33} cfc33={this.state.cfc33}/>
    }
    else if(this.state.dayStatus === "Day 34"){
      dayResult= <Day34 dfc34={this.state.dfc34} cfc34={this.state.cfc34}/>
    }
    else if(this.state.dayStatus === "Day 35"){
      dayResult= <Day35 dfc35={this.state.dfc35} cfc35={this.state.cfc35} />
    }
    else if(this.state.dayStatus === "Day 36"){
      dayResult= <Day36 dfc36={this.state.dfc36} cfc36={this.state.cfc36} />
    }
    else if(this.state.dayStatus === "Day 37"){
      dayResult= <Day37 dfc37={this.state.dfc37} cfc37={this.state.cfc37}/>
    }
    else if(this.state.dayStatus === "Day 38"){
      dayResult= <Day38 dfc38={this.state.dfc38} cfc38={this.state.cfc38}/>
    }
    else if(this.state.dayStatus === "Day 39"){
      dayResult= <Day39 dfc39={this.state.dfc39} cfc39={this.state.cfc39}/>
    }
    else if(this.state.dayStatus === "Day 40"){
      dayResult= <Day40 dfc40={this.state.dfc40} cfc40={this.state.cfc40}/>
    }
    else if(this.state.dayStatus === "Day 41"){
      dayResult= <Day41 dfc41={this.state.dfc41} cfc41={this.state.cfc41}/>
    }
    else if(this.state.dayStatus === "Day 42"){
      dayResult= <Day42 dfc42={this.state.dfc42} cfc42={this.state.cfc42}/>
    }

    if (this.state.ourApp === true){
    return(
      <Container>
        <Content >
          <RNPickerSelect style={{borderWidth:2, marginBottom:10}}
              items={this.state.items}
              placeholder={{}}
              onValueChange={(value) => {

                data = allChat.filter(function(item){
                 return item.id == value;
                }).map(function({id, age, weight, daily_gain, dfc, cfc, drug, feed}){
  return {id, age, weight, daily_gain, dfc, cfc, drug, feed};
});


                  this.setState({
                      ourApp:true,
                      dayStatus:value,
                      favColor1:data.drug
                  });}}>
          </RNPickerSelect>
          <Text style = {styles.inputTxt}>
               Stock Size
             </Text>
          <TextInput
            onChangeText={(valueStock)=>this.callStock(valueStock)}
            placeholder="Stock Size"
            keyboardType="numeric"
            style = {styles.input}
            underlineColorAndroid = "transparent"


            autoCapitalize = "none" />
          {dayResult}
        </Content>
      </Container>
    )
  }
  else {
    return(
      <Container>
        <Content >
          <RNPickerSelect style={{borderWidth:2, marginBottom:10, color:"blue"}}
              items={this.state.items}
              placeholder={{}}
              onValueChange={(value) => {

                    data = allChat.filter(function(item){
                    return item.id == value;
                  }).map(function({id, age, weight, daily_gain, dfc, cfc, drug, feed}){
    return {id, age, weight, daily_gain, dfc, cfc, drug, feed};
});
                      this.setState({
                    ourApp:true,
                    dayStatus:value,
                    favColor1:data.drug
                });}}>
          </RNPickerSelect>
        </Content>
      </Container>
    )
  }
  }
}


const styles = StyleSheet.create({
  textbelow:{
    fontSize:17,
    marginTop:10,
    color:"white",
    textAlign:"center"
  },
  txtRight:{
    textAlign:'right',
    marginLeft:20,
    paddingLeft:20,
    color:'red'
  },
  input: {
      marginTop:0,
      marginLeft:5,
      marginRight:15,
      marginBottom:15,
      height: 40,
      borderColor: 'blue',
      borderWidth: 1
   },
   inputTxt:{
    fontSize:15,
    marginLeft:5,
    fontFamily:'Roboto',
    color:"blue"
  }
})
