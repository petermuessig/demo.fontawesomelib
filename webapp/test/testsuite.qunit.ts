export default {
	name: "QUnit test suite for the UI5 Application: demo.fontawesome",
	defaults: {
		page: "ui5://test-resources/demo/fontawesome/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: 2
		},
		sinon: {
			version: 4
		},
		ui5: {
			language: "EN",
			theme: "sap_horizon"
		},
		coverage: {
			only: "demo/fontawesome/",
			never: "test-resources/demo/fontawesome/"
		},
		loader: {
			paths: {
				"demo/fontawesome": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for demo.fontawesome"
		},
		"integration/opaTests": {
			title: "Integration tests for demo.fontawesome"
		}
	}
};
