import { mandala as man } from '../mandala.js'

const counting_instructions = `Through relying on counting the breaths, the practitioner gains the ability to manifest the four dhyānas, the four immeasurable minds, and the four formless absorptions. Upon reaching the very last one, the one known as the “neither perception nor non-perception” absorption, so long as he remains aware that [this absorption] does not qualify as nirvāṇa, this person will definitely be able to gain realization in the paths of the Three Vehicles.`
const counting = man([ counting_instructions ], 'Counting Instructions (Zhiyi)')
const following = man([
 'Awareness that the breath is entering.',
 'Awareness that the breath is exiting.',
 'Awareness that the breath is long or short.',
 'Awareness that the breath permeates the body.',
 'Relinquishing all physical actions.',
 'The mental experience of joy.',
 'The mental experience of bliss.',
 'The experiencing of all mental actions.',
 'The mental production of joy.',
 'The mental development of concentration.',
 'The mental generation of liberation.',
 'The contemplation of impermanence.',
 'The contemplation of dispersion.',
 'The contemplation of abandonment of desire.',
 'The contemplation of cessation.',
 'The contemplation of renunciation.'
], 'Following Instructions (Zhiyi)')

const stabilization = man([
  'First, there is the samādhi of the wheel of earth. This is just the “preliminary ground” (anāgamya).',
	'Second, there is the samādhi of the wheel of water. This is just the bringing forth of roots of goodness associated with the various types of dhyāna absorptions.',
	'Third, there is the samādhi of the wheel of empty space. This is just where [any of] five classes of “provisional-teaching” practitioners may awaken to [dharmas based in] causes and conditions as devoid of any inherent nature and as comparable to empty space.',
	'Fourth, there is the gold-dust (lit. “gold-sand”) samādhi. This is just the liberation from both view and thought [delusions]. One comes to possess herein right wisdom4 devoid of any attachment and analogous in character to gold dust.',
	'Fifth, there is the vajra-wheel samādhi. This is just the ninth station on the irresistible path (ānantāryamārga). It is able to cut off the fetters of the three realms so that they are eternally put to an end and leave no residue. One realizes here the knowledge of destruction (kṣaya-jñāna), realizes the knowledge of non-production (anutpāda-jñāna), and enters nirvāṇa.'
], 'Fix Wheel Dhyanas (Zhiyi)')

const contemplation_instructions = 'On account of cultivating contemplation, the practitioner is then able to bring forth the nine reflections, the eight recollections, the ten reflections, the eight liberations, the eight bases of ascendancy (abhibhvāyatana), the ten universal bases (kṛtsnāyatana), the nine sequential absorptions, the lion-sport samādhi, the “over-leaping” samādhi, the “practice” dhyānas, the fourteen transformational minds, the three clarities, the six superknowledges, and also the eight liberations. One achieves the cessation of feeling and perception and then enters nirvāṇa. As for the ability of “contemplation” to serve as a gate to the sublime, the conceptual basis for it abides in this.'
const contemplation = man([ contemplation_instructions ], 'Contemplation Instructions (Zhiyi)')

const turning = man([
  `In a case where the practitioner employs wisdom in practice, they engage in a skillful reductive analysis whereby they turn back to the root and return to the source. At this time they generate,`,
  man([ 'emptiness', 'signlessness', 'wishlessness'], 'Three Doors of Liberation'),
	'the thirty-seven wings,',
	'the four truths,',
	'the twelve causes and conditions,',
	'and the correct contemplation characteristic of the Middle Way.',
	'On account of this, they succeed in gaining entry into nirvāṇa.'
], 'Turning Instructions (Zhiyi)')

const purification = man([
  'In a case where the practitioner is able to realize the fundamental purity of all dharmas, he then gains the realization of the dhyāna of [cognition of] the fundamental nature. On account of gaining this dhyāna, Two-Vehicles practitioners experience an absorption-based realization of nirvāṇa. In the case of a bodhisattva, he enters the “ironwheel” position and embodies the mind-states inhering in the stations comprised by the ten faiths.',
	'In a case where one continues to cultivate without stopping, he subsequently generates the nine kinds of great dhyāna, namely: the dhyāna of [cognition of] the fundamental nature, the all-encompassing dhyāna, the difficult-to-access dhyāna, the universal-gateway dhyāna, the good-person dhyāna, the dhyāna of all practices, the dhyāna which dispenses with affliction, the dhyāna of bliss in this world and other worlds, and the dhyāna of purity.',
	'Through relying on these dhyānas, the bodhisattvas realize the fruit of the great bodhi. They have realized it before, they realize it now, and they will realize it in the future. As for the ability of “purification” to serve as a gate to the sublime, the conceptual basis for it abides in this.'
], 'Purification Instructions (Zhiyi)')

const instructions = man(
  [ counting, following, stabilization, contemplation, turning, purification ],
	'Six Gates Instructions (Zhiyi)'
)

export { instructions }

