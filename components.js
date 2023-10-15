import Tonic from 'https://unpkg.com/@socketsupply/tonic'
import { instructions } from './mandalas/six_gates.js'

const classes = [
  'buddha-family',
	'vajra-family',
	'lotus-family',
	'karma-family',
	'jewel-family',
	'sequential'
]

class MandalaButton extends Tonic {
  click () {
		const view = document.querySelector('mandala-viewer')
		view.innerHTML = ''
		const elem = document.createElement('mandala-detail')
		elem.props.mandala = this.props.mandala
		view.appendChild(elem)
	}
  render () {
		console.log(this)
		return this.html`<mandala-string>${ this.props.mandala.name }</mandala-string>`
	}
}
class MandalaDetail extends Tonic {
	render () {
    const items = this.props.mandala.array.map(part => {
			if (typeof part === 'string') {
				return this.html`<div>${ part }</div>`
			} else {
				return this.html`<mandala-button mandala=${ part } ></mandala-button>`
			}
		})
		console.log(items)
		return this.html`<mandala-list>${ items }</mandala-list>`
	}
}

Tonic.add(MandalaButton, 'mandala-button')
Tonic.add(MandalaDetail, 'mandala-detail')

const index = document.createElement('mandala-button')
index.props.mandala = instructions
export { index }

