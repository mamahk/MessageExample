sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.exc16.messages.controller.Main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.training.exc16.messages.view.Main
		 */
			onInit: function() {
				var oView = this.getView();

				oView.setModel(new sap.ui.model.json.JSONModel(), "input");
		
				oView.byId("idMsgTable").setModel(
					sap.ui.getCore().getMessageManager().getMessageModel(), "message");


			},
			
			onShowCarrier: function() {

				var oMessageManager = sap.ui.getCore().getMessageManager();
				var oMessageProcessor = new sap.ui.core.message.ControlMessageProcessor();
				oMessageManager.registerMessageProcessor(oMessageProcessor);
		
				oMessageManager.addMessages(
					new sap.ui.core.message.Message({
						message: "Button pressed",
						type: sap.ui.core.MessageType.Success,
						processor: oMessageProcessor
					})
				);
		
				var oView = this.getView();
				var oInputData = oView.getModel("input").getData();
		
				oView.bindElement({
					path: "travel>/CarrierSet('" + oInputData.carrierId + "')"
				});
			},
		
			onDeleteMessages: function() {
				var oMessageManager = sap.ui.getCore().getMessageManager();
				oMessageManager.removeAllMessages();
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.training.exc16.messages.view.Main
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.training.exc16.messages.view.Main
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.training.exc16.messages.view.Main
		 */
		//	onExit: function() {
		//
		//	}

	});

});