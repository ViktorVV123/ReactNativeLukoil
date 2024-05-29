import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {VectorIcon} from '../../../icons/TableIcon/VectorIcon.tsx';

import {ListIcon} from '../../../icons/TableIcon/ListIcon.tsx';
import {StarIcon} from '../../../icons/TableIcon/StarIcon.tsx';

export const TableComponent = ({
  title,
  subTitle,
  text,
  url,
  colorChange,
  favorite,
  toggleFavorite,
}: {
  title: string;
  subTitle: string;
  text: string;
  url: string;
  colorChange: any;
  favorite: any;
  toggleFavorite: any;
}) => {
  /* const [color, setColor] = useState(false);
  const colorChange = () => {
    setColor(!color);
  };*/
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.cellLeft}>
            <VectorIcon />
            <View style={styles.line} />
            <StarIcon
              colorChange={colorChange}
              favorite={favorite}
              toggleFavorite={toggleFavorite}
            />
            <View style={styles.line} />
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.subTitleText}>{subTitle}</Text>
            </View>
          </View>
          <View style={styles.cellRight}>
            <Text style={styles.descriptionText}>{text}</Text>
            <View style={styles.line} />
            <View style={styles.iconContainer}>
              <ListIcon url={url} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#1F1F1F',
    justifyContent: 'space-around',
  },
  headerCell: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: 'black',
    alignItems: 'flex-start',
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  lastRow: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  cellLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: 'black',
  },
  cellRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  titleText: {
    color: 'white',
    fontSize: 16,
  },
  subTitleText: {
    marginTop: 10,
    color: 'white',
    backgroundColor: '#424242',
    width: 50,
    textAlign: 'center',
    borderRadius: 10,
    padding: 3,
  },
  descriptionText: {
    color: 'white',
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  line: {
    height: '130%',
    width: 1,
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
  /*  headerRow: {
flexDirection: 'row',
backgroundColor: '#1F1F1F',
borderTopLeftRadius: 15,
borderTopRightRadius: 15,
borderBottomWidth: 1,
borderBottomColor: 'black',
},
headerCell: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
paddingVertical: 5,
},
headerText: {
color: 'white',
fontSize: 18,
},
row: {
flexDirection: 'row',
borderBottomWidth: 1,
borderBottomColor: 'black',
},
lastRow: {
/!*    borderBottomLeftRadius: 15,
borderBottomRightRadius: 15,*!/
},
cell: {
flex: 1,
padding: 10,
borderRightWidth: 1,
borderRightColor: 'black',
},
cellLeft: {
flexDirection: 'row',
alignItems: 'center',
},
cellRight: {
justifyContent: 'center',
},
textContainer: {
marginLeft: 10,
},
titleText: {
color: 'white',
fontSize: 16,
},
subTitleText: {
color: 'white',
},
descriptionText: {
color: 'white',
fontSize: 16,
},
urlText: {
color: 'white',
fontSize: 16,
},
line: {
height: '100%',
width: 1,
backgroundColor: 'black',
marginHorizontal: 10,
borderRightWidth: 1,
borderColor: 'black'
},*/
});
