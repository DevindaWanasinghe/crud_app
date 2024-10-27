import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const UniversityDetails = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: '#f3f4f6', marginTop:-27, }}>
      {/* University Logo */}
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <Image 
          source={require('../../assets/uwulogo.jpg')} 
          style={{ width: 400, height: 150,  borderRadius:10 }}
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10,color:' #001a66'}}>Uva Wellassa University of Sri Lnaka</Text>
      </View>

      {/* University Introduction */}
      <View style={{ marginVertical: 15 }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#374151' }}>විශ්ව විද්‍යාල ශිෂ්‍යයා යනු,</Text>
        <Text style={{ fontSize: 16, color: '#6b7280', marginTop: 8 }}>
          
            1) විශ්ව විද්‍යාලයෙන් පොතේ ගුරුන් පිරිසක් බිහි වේවායි බලාපොරොත්තු නොවෙමු.{'\n\n'}

            2) කියන දේ එලෙසින්ම පිළිගන්නා විවේචනයට අකමැති පිරිසක් බලාපොරොත්තු නොවෙමු.{'\n\n'}

            3) ඇති ගුණ වසා ගෙන නැති ගුණ පෙන්වන කුහකයන් පිරිසක් බලාපොරොත්තු නොවෙමු.{'\n\n'}

            4) නැවෙන් ගොඩබෑ හැටියේ විදේශ භාණ්ඩ  වැනි මෙරටට අමුතු වූ මෙහි සභ්‍යයත්වයක් නොදන්නා කෘතිම රූකඩයන් පිරිසක් බලාපොරොත්තු නොවෙමු{'\n\n'}

            5) විනෝද නොවන බර කල්පනාවෙන් පසුවන තාපස පිරිසක් බලාපොරොත්තු නොවෙමු.{'\n\n'}
        </Text>
      </View>

      {/* University Anthem */}
      <View style={{ marginVertical: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#001a66', textAlign:'center' }}>University Anthem</Text>
        
        <Image 
          source={require('../../assets/uwu3.jpg')}
          style={{ width: '100%', height: 150, marginTop: 10,borderRadius:10  }}
        />
        <Text style={{ fontSize: 16, color: '#6b7280', marginTop: 8 }}>
        නමුණුකුලින් බඹරගලට ඇදෙන සුලං රැළි ඔස්සේ{'\n'}
        දුන්හිඳ දියළුම දිය ඇලි විසුල සීත පොද වැස්සේ{'\n'}
        මහියංගණ මුතියංගණ වෙහෙර වඳින හිරු රැස්සේ{'\n'}
        බබලයි සරසවිය අපේ පිහිටි ඌව වෙල්ලස්සේ{'\n\n'}

        විද්‍යා හා තාක්ෂණික නව දැනුමෙන් මනස සදා //{'\n'}
        කෘෂි හා කළමණාකරන කටයුතු වෙත නැණස යොදා{'\n'}
        මයුරපාද සෙනසුන්ගල විදුබිම් වල සුවඳ බෙදා{'\n'}
        ජය ලද පෙර විරුවන් ලෙද නව ලොව ජය ගනිමු මෙදා{'\n\n'}

        නමුණුකුලින් බඹරගලට…{'\n\n'}

        දෑ කුල ගොත් වාද භේද අතැර දෑත් එකට බඳිමු //{'\n'}
        අවිදු අඳුර දුරලන්නට එකාවන්ව අකුරු කරමු{'\n'}
        සක්වල ගල දසනු දිසා කිත් යසසින් ගිගුම් නගමු{'\n'}
        පවර ඌව වෙල්ලස්සේ නාමය රණඹරෙහි ලියමු{'\n\n'}

        නමුණුකුලින් බඹරගලට…{'\n\n'}

        <Text style={{ fontSize: 12, color: '#6b7280', marginTop: 8 }}>
        පද රචනය: මහාචාර්ය සුනිල් ආරියරත්න{'\n'}
        තනු නිර්මාණය: ආචාර්ය පණ්ඩිත් අමරදේව{'\n'}

        </Text>
       
        </Text>
      </View>

      {/* Logo Explanation */}
      <View style={{ marginVertical: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#001a66', textAlign:'center'}}>Logo Explanation</Text>
        <Image 
          source={require('../../assets/uwu5.jpg')}
          style={{ width: '100%', height: 150, marginTop: 10,borderRadius:10  }}
        />
        <Image 
          source={require('../../assets/uwu6.jpg')}
          style={{ width: '100%', height: 410, marginTop: 10,borderRadius:6  }}
        />
      </View>

      {/* Sisu Wiru Anthem */}
      <View style={{ marginVertical: 15 }}>
        <Image 
          source={require('../../assets/uwu7.jpg')} 
          style={{ width: '100%', height: 590, marginTop: 10,borderRadius:6 }}
        />
      </View>
    </ScrollView>
  );
};

export default UniversityDetails;
