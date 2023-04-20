export default {
	closePost() {
		storeValue('visible', false);
	},
	openPost() {
		storeValue('visible', true);
	}
}