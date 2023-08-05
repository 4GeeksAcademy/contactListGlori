const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			delContact: null,
			newcontact: [
				{
					id: 1,
					name: "Amelia Salmón",
					phone: "(506) 12345678",
					address: "42 Wallaby Way, Sydney",
					mail: "arasa@gmail.com",
				},
				{
					id: 2,
					name: "Manuel Macarrón",
					phone: "(47) 5695266",
					address: "2nd Av. Texas",
					mail: "marramanuel@yahoo.com",
				},
				{
					id: 3,
					name: "Paper Lupe",
					phone: "(150) 85541558558",
					address: "53 Hogwarts",
					mail: "LU_paper42@gmail.com",
				},
			],
			showModal: false,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
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
				/* let contactlist = getStore().newcontact;
				const createnewContact = {
					id: contactlist.length + 1,
					...contact
				};
				setStore({ newcontact: [...contactlist, createnewContact] }); */
			},
			toggleModal: (show) => {
				setStore({ showModal: show })
			},
			/* handleDelete: id => {
				getActions().createContact(id)
				setStore({ showModal: true })
			}, */
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
