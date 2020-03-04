export default class Calculate {
    constructor(bpm) {
        this.bpm = bpm;
    }
  
    // Calculate regular notes, dotted notes and triplet notes 
    // After calculation, push them into a map and return the map

    calcNotes() {
        const calcMap = new Map();
        calcMap.set('regNotes', []);
        calcMap.set('dottedNotes', []);
        calcMap.set('tripletNotes', []);
        let regNotesConversion = (60000 / this.bpm) * 4;
        for (let i = 0; i < 7; i++) {
            calcMap.get('regNotes').push(regNotesConversion);
            regNotesConversion/= 2;
        }
        for (let i = 0; i < 7; i++) {
            let cur = calcMap.get('regNotes');
            calcMap.get('dottedNotes').push(cur[i] + (cur[i]/2));
        }
        for (let i = 0; i < 7; i++) {
            let cur = calcMap.get('regNotes');
            calcMap.get('tripletNotes').push((cur[i] / 3) * 2);
        }
        return calcMap;
    }
}