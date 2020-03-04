import {elements} from './base';
import Calculate from '../models/Calculate';


export const renderCalculations = (value) => {
    const valuesToMap = new Calculate(value);
    const results = valuesToMap.calcNotes();
    const regNotes = results.get('regNotes');
    const dottedNotes = results.get('dottedNotes');
    const tripletNotes = results.get('tripletNotes');
    const markup = `<div class="notes">
    <ul class="regular__notes">
        <h2>Regular notes</h2>
        <li class="whole__note"><span class="iconify" data-icon="mdi:music-note-whole" data-inline="false"></span></span>: ${regNotes[0].toFixed(2)}ms</li>
        <li class="half__note"><span class="iconify" data-icon="mdi:music-note-half" data-inline="false"></span>: ${regNotes[1].toFixed(2)}ms</li>
        <li class="quarter__note"><span class="iconify" data-icon="mdi:music-note-quarter" data-inline="false"></span>: ${regNotes[2].toFixed(2)}ms</li>
        <li class="eight__note"><span class="iconify" data-icon="mdi:music-note-eighth" data-inline="false"></span>: ${regNotes[3].toFixed(2)}ms</li>
        <li class="sixteenth__note"><span class="iconify" data-icon="mdi:music-note-sixteenth" data-inline="false"></span>: ${regNotes[4].toFixed(2)}ms</li>
        <!--<li class="32th__note">32th note: ${regNotes[5].toFixed(2)}ms</li>-->
    </ul>
    <ul class="dotted__notes">
        <h2>Dotted notes</h2>
        <li class="whole__dotted"><span class="iconify" data-icon="mdi:music-note-whole-dotted" data-inline="false"></span>: ${dottedNotes[0].toFixed(2)}ms</li>
        <li class="half__dotted"><span class="iconify" data-icon="mdi:music-note-half-dotted" data-inline="false"></span>: ${dottedNotes[1].toFixed(2)}ms</li>
        <li class="quarter__dotted"><span class="iconify" data-icon="mdi:music-note-quarter-dotted" data-inline="false"></span>: ${dottedNotes[2].toFixed(2)}ms</li>
        <li class="eight__dotted"><span class="iconify" data-icon="mdi:music-note-eighth-dotted" data-inline="false"></span>: ${dottedNotes[3].toFixed(2)}ms</li>
        <li class="sixteenth__dotted"><span class="iconify" data-icon="mdi:music-note-sixteenth-dotted" data-inline="false"></span>: ${dottedNotes[4].toFixed(2)}ms</li>
        <!--<li class="32th__dotted">32th dotted: ${dottedNotes[5].toFixed(2)}ms</li>-->
    </ul>
    <ul class="triplet__notes">
        <h2>Triplet notes</h2>
        <li class="whole__triplet"><span class="iconify" data-icon="mdi:music-note-whole" data-inline="false"></span></span>triplet: ${tripletNotes[0].toFixed(2)}ms</li>
        <li class="half__triplet"><span class="iconify" data-icon="mdi:music-note-half" data-inline="false"></span></span> triplet: ${tripletNotes[1].toFixed(2)}ms</li>
        <li class="quarter__triplet"><span class="iconify" data-icon="mdi:music-note-quarter" data-inline="false"></span></span>triplet: ${tripletNotes[2].toFixed(2)}ms</li>
        <li class="eight__triplet"><span class="iconify" data-icon="mdi:music-note-eighth" data-inline="false"></span></span>triplet: ${tripletNotes[3].toFixed(2)}ms</li>
        <li class="sixteenth__triplet"><span class="iconify" data-icon="mdi:music-note-sixteenth" data-inline="false"></span></span> triplet: ${tripletNotes[4].toFixed(2)}ms</li>
        <!--<li class="32th__triplet">32th triplet: ${tripletNotes[5].toFixed(2)}ms</li>-->
    </ul>
</div>`;
    elements.displayResults.insertAdjacentHTML('afterbegin', markup);
    elements.displayButton.style.display = 'block';
}