const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			delContact: null,
			newcontact: [
				{
					id: 1,
					name: "Amelia Salmón",
					phone: "12345678",
					address: "42 Wallaby Way, Sydney",
					mail: "arasa@gmail.com",
				},
				{
					id: 2,
					name: "Manuel Macarrón",
					phone: "5695266",
					address: "2nd Av. Texas",
					mail: "marramanuel@yahoo.com",
				},
				{
					id: 3,
					name: "Paper Lupe",
					phone: "85541558558",
					address: "53 Hogwarts",
					mail: "LU_paper42@gmail.com",
				},

			],
			showModal: false,
		},
		actions: {
			addContact: (contact) => {
				const store = getStore();
				const temporalId = store.newcontact.length + 1;
				const newcontact = [
					...store.newcontact,
					{
						...contact, id: temporalId
					},
				];
				setStore({ newcontact });
			},
			toggleModal: (show) => {
				setStore({ showModal: show })
			},

			delete: (contact) => {
				const store = getStore().newcontact;
				setStore({ newcontact: store.filter((value) => value !== contact) })
				getActions().deleteModal();
			},
			setContactToBeDeleted: (contact) => {
				setStore({ delContact: contact });
			},
			deleteModal: () => {
				setStore({ showModal: false, delContact: null });
			},
			closeModal: () => {
				setStore({ showModal: false });
			},
			edit: (id, contact) => {
				let mycontacts = getStore().newcontact;
				const idcontact = mycontacts.findIndex(item => item.id === id);
				if (idcontact !== -1) {
					const contactedit = [...mycontacts];
					contactedit[idcontact] = { id, ...contact };
					setStore({ newcontact: contactedit });
				}
			}
		}
	};
};

export default getState;
