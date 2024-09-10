const common = {
	namespaced: true,
	state: {
		modalOptions: {
			style: {},
			sendData: {},
			getData: {},
		},
		alertOptions: {
			isOpen: false,
			isConfirm: false,
			title: '',
			content: '',
			type: '',
		},
		isConfirmClick: {
			isClick: false,
			type: '',
		},
	},
	getters: {
		getModalOptions: state => {
			return state.modalOptions;
		},
		getAlertOptions: state => {
			return state.alertOptions;
		},
		getIsConfirmClick: state => {
			return state.isConfirmClick;
		},
	},
	mutations: {
		setModalOptionsStyle(state, payload) {
			state.modalOptions.style = payload;
		},
		setModalOptionsSendData(state, payload) {
			state.modalOptions.sendData = payload;
		},
		setModalOptionsGetData(state, payload) {
			state.modalOptions.getData = payload;
		},
		setAlertOptions(state, payload) {
			state.alertOptions = payload;
		},
		setIsConfirmClick(state, payload) {
			state.isConfirmClick = payload;
		},
	},
};

export default common;
