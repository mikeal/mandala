class Mandala {
	constructor (array, name=false) {
		this.array = array
		this.named = name
	}
	static create (array, name=false) {
		return new Mandala(array, name)
	}
	get name () {
		const _find = self => {
			if (self.named) return self.named
			if (typeof self.array[0] === 'string') {
				return self.array[0]
			}
			return _find(self.array[0])
		}
		return _find(this)
	}
}

const mandala = Mandala.create

export { mandala, Mandala }

