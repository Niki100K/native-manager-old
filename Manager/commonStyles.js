import { StyleSheet } from 'react-native'

export const commonStyles = StyleSheet.create({
    container: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    card: {
        width: '48%',
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 16,
    },
    imgCon: {
        position: 'relative',
        width: '100%',
        aspectRatio: 1,
        padding: 8,
    },
    img: {
      width: '100%',  
      height: '100%',  
    },
    name: {
        textAlign: 'center',
        fontSize: 16,
        padding: 4,
    },
    totalCircle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 60,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }
})