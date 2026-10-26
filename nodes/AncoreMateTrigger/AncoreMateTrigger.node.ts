// Generated from catalog/ by tools/AncoreMate.CatalogGenerator. Do not edit.
import type {
	IHookFunctions,
	ILoadOptionsFunctions,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
	IWebhookFunctions,
	IWebhookResponseData,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { createSubscription, deleteSubscription, eventData, loadOptions, type TriggerSpec } from '../shared/runtime';

const BASE_URL = 'https://ancorecloud.com/ancoremate';
const CLIENT = 'n8n/1.24.0';

const EVENTS: Record<string, TriggerSpec> = {
	"whenAppCreated": {
		"path": "/v1/triggers/app-created",
		"query": [
			"spaceId"
		]
	},
	"whenAppDataUpdated": {
		"path": "/v1/triggers/app-data-updated",
		"query": [
			"appId",
			"spaceId"
		]
	},
	"whenAppExported": {
		"path": "/v1/triggers/app-exported",
		"query": [
			"appId",
			"spaceId"
		]
	},
	"whenAppPublished": {
		"path": "/v1/triggers/app-published",
		"query": [
			"appId",
			"spaceId"
		]
	},
	"whenAppReloadFinished": {
		"path": "/v1/triggers/app-reload-finished",
		"query": [
			"appId",
			"spaceId",
			"status"
		]
	},
	"whenAutomationCreated": {
		"path": "/v1/triggers/automation-created",
		"query": [
			"spaceId"
		]
	},
	"whenAutomationDeleted": {
		"path": "/v1/triggers/automation-deleted",
		"query": [
			"automationId",
			"spaceId"
		]
	},
	"whenAutomationRunEnded": {
		"path": "/v1/triggers/automation-run-ended",
		"query": [
			"automationId",
			"spaceId"
		]
	},
	"whenAutomationRunFailed": {
		"path": "/v1/triggers/automation-run-failed",
		"query": [
			"automationId",
			"spaceId"
		]
	},
	"whenAutomationRunStarted": {
		"path": "/v1/triggers/automation-run-started",
		"query": [
			"automationId",
			"spaceId"
		]
	},
	"whenAutomationUpdated": {
		"path": "/v1/triggers/automation-updated",
		"query": [
			"automationId",
			"spaceId"
		]
	},
	"whenAncoreShareReportFinished": {
		"path": "/v1/triggers/ancoreshare-report-finished",
		"query": [
			"key",
			"includeFiles",
			"appId",
			"reportId"
		]
	}
};

export class AncoreMateTrigger implements INodeType {
	description: INodeTypeDescription = {
		"displayName": "ancoreMate Trigger",
		"name": "ancoreMateTrigger",
		"icon": {
			"light": "file:ancoremate.svg",
			"dark": "file:ancoremate.dark.svg"
		},
		"group": [
			"trigger"
		],
		"version": 1,
		"subtitle": "={{$parameter[\"event\"]}}",
		"description": "Starts the workflow when an event happens in Qlik Cloud® or an ancoreShare report is finished.",
		"defaults": {
			"name": "ancoreMate Trigger"
		},
		"inputs": [],
		"outputs": [NodeConnectionTypes.Main],
		"credentials": [
			{
				"name": "ancoreMateOAuth2Api",
				"required": true
			}
		],
		"webhooks": [
			{
				"name": "default",
				"httpMethod": "POST",
				"responseMode": "onReceived",
				"path": "webhook"
			}
		],
		"properties": [
			{
				"displayName": "Event",
				"name": "event",
				"type": "options",
				"noDataExpression": true,
				"required": true,
				"options": [
					{
						"name": "When an ancoreShare report is finished",
						"value": "whenAncoreShareReportFinished",
						"description": "Starts when a report button with ancoreMate event enabled has finished a report in the tenant of the connection, run by a user or through ancoreShare External Execution. With Include the report files the files come along as Attachments, ready for a mail."
					},
					{
						"name": "When an app is created",
						"value": "whenAppCreated",
						"description": "Starts when an app is created."
					},
					{
						"name": "When an app is exported",
						"value": "whenAppExported",
						"description": "Starts when an app is exported."
					},
					{
						"name": "When an app is published",
						"value": "whenAppPublished",
						"description": "Starts when an app is published to a managed space."
					},
					{
						"name": "When an app reload finishes",
						"value": "whenAppReloadFinished",
						"description": "Starts when a reload of an app finishes, successfully or with an error."
					},
					{
						"name": "When an automation is created",
						"value": "whenAutomationCreated",
						"description": "Starts when an automation is created."
					},
					{
						"name": "When an automation is deleted",
						"value": "whenAutomationDeleted",
						"description": "Starts when an automation is deleted."
					},
					{
						"name": "When an automation is updated",
						"value": "whenAutomationUpdated",
						"description": "Starts when an automation is changed."
					},
					{
						"name": "When an automation run ends",
						"value": "whenAutomationRunEnded",
						"description": "Starts when a run of an automation ends."
					},
					{
						"name": "When an automation run fails",
						"value": "whenAutomationRunFailed",
						"description": "Starts when a run of an automation fails."
					},
					{
						"name": "When an automation run starts",
						"value": "whenAutomationRunStarted",
						"description": "Starts when a run of an automation starts."
					},
					{
						"name": "When the data model of an app changes",
						"value": "whenAppDataUpdated",
						"description": "Starts when the data model of an app is updated, for example by a reload with changed tables."
					}
				],
				"default": "whenAncoreShareReportFinished"
			},
			{
				"displayName": "ancoreMate key",
				"name": "key",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"event": [
							"whenAncoreShareReportFinished"
						]
					}
				},
				"description": "The ancoreMate key shown in the ancoreMate settings of the report button."
			},
			{
				"displayName": "Include the report files",
				"name": "includeFiles",
				"type": "boolean",
				"default": true,
				"displayOptions": {
					"show": {
						"event": [
							"whenAncoreShareReportFinished"
						]
					}
				},
				"description": "Whether the trigger passes on the finished files as Attachments, ready for a mail; files up to 50 MB together. Turn off to get only the links."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAncoreShareReportFinished"
						]
					}
				},
				"description": "Only reports of this app; useful when a copy of the app has a button with the same key."
			},
			{
				"displayName": "Report",
				"name": "reportId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAncoreShareReportsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAncoreShareReportFinished"
						]
					}
				},
				"description": "Only reports of this report button."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppCreated"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppExported"
						]
					}
				},
				"description": "Only events of this app. Leave empty for all apps."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppExported"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppPublished"
						]
					}
				},
				"description": "Only when this app is published (the app in the source space). Leave empty for all apps."
			},
			{
				"displayName": "Managed space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppPublished"
						]
					}
				},
				"description": "Only publications to this managed space. Leave empty for all spaces."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppReloadFinished"
						]
					}
				},
				"description": "Only events of this app. Leave empty for all apps."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppReloadFinished"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "Result",
				"name": "status",
				"type": "options",
				"options": [
					{
						"name": "Any",
						"value": ""
					},
					{
						"name": "ok",
						"value": "ok"
					},
					{
						"name": "error",
						"value": "error"
					}
				],
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppReloadFinished"
						]
					}
				},
				"description": "Only successful (ok) or failed (error) reloads. Leave empty for both."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationCreated"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "Automation",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationDeleted"
						]
					}
				},
				"description": "Only events of this automation. Leave empty for all automations."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationDeleted"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "Automation",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationUpdated"
						]
					}
				},
				"description": "Only events of this automation. Leave empty for all automations."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationUpdated"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "Automation",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationRunEnded"
						]
					}
				},
				"description": "Only events of this automation. Leave empty for all automations."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationRunEnded"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "Automation",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationRunFailed"
						]
					}
				},
				"description": "Only events of this automation. Leave empty for all automations."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationRunFailed"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "Automation",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationRunStarted"
						]
					}
				},
				"description": "Only events of this automation. Leave empty for all automations."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAutomationRunStarted"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppDataUpdated"
						]
					}
				},
				"description": "Only events of this app. Leave empty for all apps."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesId"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"event": [
							"whenAppDataUpdated"
						]
					}
				},
				"description": "Only events in this space. Leave empty for all spaces."
			}
		]
	};

	methods = {
		loadOptions: {
			async loadGetAppsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListAncoreShareReportsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/ancoreshare/apps/{appId}/reports', {}, {"appId":"appId"}, 'value', 'id', 'title');
			},
			async loadListAppChoicesResourceId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/app-choices', {"limit":1000}, {}, 'value', 'resourceId', 'name');
			},
			async loadListAutomationsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/automations', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListSpaceChoicesId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/space-choices', {"limit":1000}, {}, 'value', 'id', 'name');
			},
		},
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				return typeof this.getWorkflowStaticData('node').subscriptionUrl === 'string';
			},
			async create(this: IHookFunctions): Promise<boolean> {
				return createSubscription.call(this, EVENTS, BASE_URL, CLIENT);
			},
			async delete(this: IHookFunctions): Promise<boolean> {
				return deleteSubscription.call(this, BASE_URL, CLIENT);
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		return { workflowData: [await eventData.call(this, this.getBodyData())] };
	}
}
