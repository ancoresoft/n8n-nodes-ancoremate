// Generated from catalog/ by tools/AncoreMate.CatalogGenerator. Do not edit.
import type {
	IExecuteFunctions,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { loadOptions, runOperations, type OperationSpec } from '../shared/runtime';

const BASE_URL = 'https://ancorecloud.com/ancoremate';
const CLIENT = 'n8n/1.24.1';

const OPERATIONS: Record<string, OperationSpec> = {
	"changeAppOwner": {
		"method": "PUT",
		"path": "/v1/apps/{appId}/owner",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "ownerId",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"copyApp": {
		"method": "POST",
		"path": "/v1/apps/{appId}/copy",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createApp": {
		"method": "POST",
		"path": "/v1/apps",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": true,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createScript": {
		"method": "POST",
		"path": "/v1/scripts",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": true,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteApp": {
		"method": "DELETE",
		"path": "/v1/apps/{appId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteAppMediaFile": {
		"method": "DELETE",
		"path": "/v1/apps/{appId}/media/file",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [
			{
				"name": "path",
				"option": false
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteScript": {
		"method": "DELETE",
		"path": "/v1/scripts/{scriptId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"scriptId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"evaluateAppPerformance": {
		"method": "POST",
		"path": "/v1/apps/{appId}/evaluations",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"exportApp": {
		"method": "POST",
		"path": "/v1/apps/{appId}/export",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [
			{
				"name": "withoutData",
				"option": false
			},
			{
				"name": "fileName",
				"option": false
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": true,
		"filesOutput": false,
		"async": false
	},
	"getApp": {
		"method": "GET",
		"path": "/v1/apps/{appId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getAppDataLineage": {
		"method": "GET",
		"path": "/v1/apps/{appId}/data-lineage",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getAppDataMetadata": {
		"method": "GET",
		"path": "/v1/apps/{appId}/data-model",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getAppEvaluation": {
		"method": "GET",
		"path": "/v1/app-evaluations/{evaluationId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"evaluationId"
		],
		"query": [
			{
				"name": "all",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getAppMediaFile": {
		"method": "GET",
		"path": "/v1/apps/{appId}/media/file",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [
			{
				"name": "path",
				"option": false
			},
			{
				"name": "thumbnail",
				"option": false
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": true,
		"filesOutput": false,
		"async": false
	},
	"getApps": {
		"method": "GET",
		"path": "/v1/apps",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "search",
				"option": true
			},
			{
				"name": "spaceId",
				"option": false
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getLoadScript": {
		"method": "GET",
		"path": "/v1/apps/{appId}/script",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getLoadScriptVersion": {
		"method": "GET",
		"path": "/v1/apps/{appId}/script-versions/{versionId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId",
			"versionId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getScript": {
		"method": "GET",
		"path": "/v1/scripts/{scriptId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"scriptId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"importApp": {
		"method": "POST",
		"path": "/v1/apps/import",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [
			{
				"name": "name",
				"option": false
			},
			{
				"name": "spaceId",
				"option": false
			}
		],
		"body": [],
		"fileInput": true,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listAppEvaluations": {
		"method": "GET",
		"path": "/v1/apps/{appId}/evaluations",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listAppMediaFiles": {
		"method": "GET",
		"path": "/v1/apps/{appId}/media",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [
			{
				"name": "folder",
				"option": false
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listLoadScriptVersions": {
		"method": "GET",
		"path": "/v1/apps/{appId}/script-versions",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listScripts": {
		"method": "GET",
		"path": "/v1/scripts",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "name",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "spaceId",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"moveAppToSpace": {
		"method": "PUT",
		"path": "/v1/apps/{appId}/space",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "spaceId",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"publishApp": {
		"method": "POST",
		"path": "/v1/apps/{appId}/publish",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "data",
				"required": false,
				"json": false
			},
			{
				"name": "moveApp",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "attributes",
				"required": false,
				"json": true
			},
			{
				"name": "originAppId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"republishApp": {
		"method": "PUT",
		"path": "/v1/apps/{appId}/publish",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "data",
				"required": false,
				"json": false
			},
			{
				"name": "targetId",
				"required": false,
				"json": false
			},
			{
				"name": "attributes",
				"required": false,
				"json": true
			},
			{
				"name": "checkOriginAppId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"setLoadScript": {
		"method": "PUT",
		"path": "/v1/apps/{appId}/script",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "script",
				"required": true,
				"json": false
			},
			{
				"name": "versionMessage",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateApp": {
		"method": "PUT",
		"path": "/v1/apps/{appId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateScript": {
		"method": "PUT",
		"path": "/v1/scripts/{scriptId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"scriptId"
		],
		"query": [],
		"body": [
			{
				"name": "script",
				"required": true,
				"json": false
			},
			{
				"name": "versionMessage",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"uploadAppMediaFile": {
		"method": "PUT",
		"path": "/v1/apps/{appId}/media/file",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [
			{
				"name": "path",
				"option": false
			}
		],
		"body": [],
		"fileInput": true,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"validateLoadScript": {
		"method": "POST",
		"path": "/v1/apps/validate-script",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "script",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getQlikConnection": {
		"method": "GET",
		"path": "/v1/connection",
		"read": true,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"sendQlikCloudRequest": {
		"method": "POST",
		"path": "/v1/qlik-request",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "method",
				"required": true,
				"json": false
			},
			{
				"name": "path",
				"required": true,
				"json": false
			},
			{
				"name": "query",
				"required": false,
				"json": false
			},
			{
				"name": "body",
				"required": false,
				"json": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"cancelReload": {
		"method": "POST",
		"path": "/v1/reloads/{reloadId}/cancel",
		"read": false,
		"list": false,
		"pathParameters": [
			"reloadId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createReloadTask": {
		"method": "POST",
		"path": "/v1/reload-tasks",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "appId",
				"required": true,
				"json": false
			},
			{
				"name": "recurrence",
				"required": true,
				"json": false
			},
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "timezone",
				"required": false,
				"json": false
			},
			{
				"name": "startDateTime",
				"required": false,
				"json": false
			},
			{
				"name": "partial",
				"required": false,
				"json": false
			},
			{
				"name": "enabled",
				"required": false,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteReloadTask": {
		"method": "DELETE",
		"path": "/v1/reload-tasks/{taskId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"taskId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getReload": {
		"method": "GET",
		"path": "/v1/reloads/{reloadId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"reloadId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getReloadLog": {
		"method": "GET",
		"path": "/v1/apps/{appId}/reload-logs/{reloadId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId",
			"reloadId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getReloadTask": {
		"method": "GET",
		"path": "/v1/reload-tasks/{taskId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"taskId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listReloadLogs": {
		"method": "GET",
		"path": "/v1/apps/{appId}/reload-logs",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listReloadTaskRuns": {
		"method": "GET",
		"path": "/v1/reload-tasks/{taskId}/runs",
		"read": true,
		"list": true,
		"pathParameters": [
			"taskId"
		],
		"query": [
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listReloadTasks": {
		"method": "GET",
		"path": "/v1/reload-tasks",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "appId",
				"option": false
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listReloads": {
		"method": "GET",
		"path": "/v1/reloads",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "appId",
				"option": false
			},
			{
				"name": "filter",
				"option": true
			},
			{
				"name": "partial",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"reloadApp": {
		"method": "POST",
		"path": "/v1/reloads",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "appId",
				"required": true,
				"json": false
			},
			{
				"name": "weight",
				"required": false,
				"json": false
			},
			{
				"name": "partial",
				"required": false,
				"json": false
			},
			{
				"name": "variables",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "resourceId",
				"required": false,
				"json": false
			},
			{
				"name": "resourceType",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"reloadAppAndWait": {
		"method": "POST",
		"path": "/v1/apps/{appId}/reload-and-wait",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "partial",
				"required": false,
				"json": false
			},
			{
				"name": "variables",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "failOnError",
				"required": false,
				"json": false
			},
			{
				"name": "ifReloading",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": true
	},
	"startReloadTask": {
		"method": "POST",
		"path": "/v1/reload-tasks/{taskId}/start",
		"read": false,
		"list": false,
		"pathParameters": [
			"taskId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateReloadTask": {
		"method": "PUT",
		"path": "/v1/reload-tasks/{taskId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"taskId"
		],
		"query": [],
		"body": [
			{
				"name": "recurrence",
				"required": false,
				"json": false
			},
			{
				"name": "timezone",
				"required": false,
				"json": false
			},
			{
				"name": "startDateTime",
				"required": false,
				"json": false
			},
			{
				"name": "partial",
				"required": false,
				"json": false
			},
			{
				"name": "enabled",
				"required": false,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"waitForReloads": {
		"method": "POST",
		"path": "/v1/reloads/wait-for",
		"read": false,
		"list": true,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "reloadIds",
				"required": true,
				"json": false,
				"list": true
			},
			{
				"name": "failOnError",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": true
	},
	"createBookmark": {
		"method": "POST",
		"path": "/v1/apps/{appId}/bookmarks",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "title",
				"required": true,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "publish",
				"required": false,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createOrUpdateDimension": {
		"method": "POST",
		"path": "/v1/apps/{appId}/dimensions",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "dimensionId",
				"required": false,
				"json": false
			},
			{
				"name": "title",
				"required": true,
				"json": false
			},
			{
				"name": "field",
				"required": true,
				"json": false
			},
			{
				"name": "label",
				"required": false,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createOrUpdateMeasure": {
		"method": "POST",
		"path": "/v1/apps/{appId}/measures",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "measureId",
				"required": false,
				"json": false
			},
			{
				"name": "title",
				"required": true,
				"json": false
			},
			{
				"name": "expression",
				"required": true,
				"json": false
			},
			{
				"name": "label",
				"required": false,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createOrUpdateVariable": {
		"method": "PUT",
		"path": "/v1/apps/{appId}/variables/{variableName}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"variableName"
		],
		"query": [],
		"body": [
			{
				"name": "definition",
				"required": true,
				"json": false
			},
			{
				"name": "comment",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createTemplateReport": {
		"method": "POST",
		"path": "/v1/report-templates/{templateId}/report",
		"read": false,
		"list": false,
		"pathParameters": [
			"templateId"
		],
		"query": [],
		"body": [
			{
				"name": "format",
				"required": false,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			},
			{
				"name": "fileName",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": true,
		"filesOutput": false,
		"async": true
	},
	"deleteBookmark": {
		"method": "DELETE",
		"path": "/v1/apps/{appId}/bookmarks/{bookmarkId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"bookmarkId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteDimension": {
		"method": "DELETE",
		"path": "/v1/apps/{appId}/dimensions/{dimensionId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"dimensionId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteMeasure": {
		"method": "DELETE",
		"path": "/v1/apps/{appId}/measures/{measureId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"measureId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteSheet": {
		"method": "DELETE",
		"path": "/v1/apps/{appId}/sheets/{sheetId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"sheetId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteVariable": {
		"method": "DELETE",
		"path": "/v1/apps/{appId}/variables/{variableName}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"variableName"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"duplicateSheet": {
		"method": "POST",
		"path": "/v1/apps/{appId}/sheets/{sheetId}/copy",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"sheetId"
		],
		"query": [],
		"body": [
			{
				"name": "title",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"evaluateExpression": {
		"method": "POST",
		"path": "/v1/apps/{appId}/evaluate",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "expression",
				"required": true,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"exportChart": {
		"method": "POST",
		"path": "/v1/apps/{appId}/objects/{objectId}/image",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"objectId"
		],
		"query": [],
		"body": [
			{
				"name": "format",
				"required": false,
				"json": false
			},
			{
				"name": "width",
				"required": false,
				"json": false
			},
			{
				"name": "height",
				"required": false,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			},
			{
				"name": "fileName",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": true,
		"filesOutput": false,
		"async": true
	},
	"exportChartData": {
		"method": "POST",
		"path": "/v1/apps/{appId}/objects/{objectId}/export",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"objectId"
		],
		"query": [],
		"body": [
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			},
			{
				"name": "fileName",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": true,
		"filesOutput": false,
		"async": true
	},
	"exportSheet": {
		"method": "POST",
		"path": "/v1/apps/{appId}/sheets/{sheetId}/export",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"sheetId"
		],
		"query": [],
		"body": [
			{
				"name": "format",
				"required": false,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			},
			{
				"name": "fileName",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": true,
		"filesOutput": false,
		"async": true
	},
	"getAppFields": {
		"method": "GET",
		"path": "/v1/apps/{appId}/fields",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getDimension": {
		"method": "GET",
		"path": "/v1/apps/{appId}/dimensions/{dimensionId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId",
			"dimensionId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getMeasure": {
		"method": "GET",
		"path": "/v1/apps/{appId}/measures/{measureId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId",
			"measureId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getMeasureValue": {
		"method": "POST",
		"path": "/v1/apps/{appId}/measures/{measureId}/value",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId",
			"measureId"
		],
		"query": [],
		"body": [
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getObjectProperties": {
		"method": "GET",
		"path": "/v1/apps/{appId}/objects/{objectId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId",
			"objectId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getTableData": {
		"method": "POST",
		"path": "/v1/apps/{appId}/objects/{objectId}/data",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId",
			"objectId"
		],
		"query": [],
		"body": [
			{
				"name": "limit",
				"required": false,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getTableDataForFields": {
		"method": "POST",
		"path": "/v1/apps/{appId}/table",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "dimensions",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "measures",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "limit",
				"required": false,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getVariable": {
		"method": "GET",
		"path": "/v1/apps/{appId}/variables/{variableName}",
		"read": true,
		"list": false,
		"pathParameters": [
			"appId",
			"variableName"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listBookmarks": {
		"method": "GET",
		"path": "/v1/apps/{appId}/bookmarks",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listDimensionValues": {
		"method": "POST",
		"path": "/v1/apps/{appId}/dimensions/{dimensionId}/values",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId",
			"dimensionId"
		],
		"query": [],
		"body": [
			{
				"name": "search",
				"required": false,
				"json": false
			},
			{
				"name": "onlyPossible",
				"required": false,
				"json": false
			},
			{
				"name": "limit",
				"required": false,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listDimensions": {
		"method": "GET",
		"path": "/v1/apps/{appId}/dimensions",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listFieldValues": {
		"method": "POST",
		"path": "/v1/apps/{appId}/field-values",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "field",
				"required": true,
				"json": false
			},
			{
				"name": "search",
				"required": false,
				"json": false
			},
			{
				"name": "onlyPossible",
				"required": false,
				"json": false
			},
			{
				"name": "limit",
				"required": false,
				"json": false
			},
			{
				"name": "selections",
				"required": false,
				"json": true,
				"entries": true
			},
			{
				"name": "bookmarkId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listMasterVisualizations": {
		"method": "GET",
		"path": "/v1/apps/{appId}/master-visualizations",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listMeasures": {
		"method": "GET",
		"path": "/v1/apps/{appId}/measures",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listReportTemplates": {
		"method": "GET",
		"path": "/v1/report-templates",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "name",
				"option": true
			},
			{
				"name": "sourceAppId",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listSheetObjects": {
		"method": "GET",
		"path": "/v1/apps/{appId}/sheets/{sheetId}/objects",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId",
			"sheetId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listSheets": {
		"method": "GET",
		"path": "/v1/apps/{appId}/sheets",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listStories": {
		"method": "GET",
		"path": "/v1/apps/{appId}/stories",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listVariables": {
		"method": "GET",
		"path": "/v1/apps/{appId}/variables",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"publishBookmark": {
		"method": "POST",
		"path": "/v1/apps/{appId}/bookmarks/{bookmarkId}/publish",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"bookmarkId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"publishSheet": {
		"method": "POST",
		"path": "/v1/apps/{appId}/sheets/{sheetId}/publish",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"sheetId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"setAlwaysOneSelectedValue": {
		"method": "PUT",
		"path": "/v1/apps/{appId}/field-settings",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [
			{
				"name": "field",
				"required": true,
				"json": false
			},
			{
				"name": "enabled",
				"required": true,
				"json": false
			},
			{
				"name": "value",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"unpublishBookmark": {
		"method": "POST",
		"path": "/v1/apps/{appId}/bookmarks/{bookmarkId}/unpublish",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"bookmarkId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"unpublishSheet": {
		"method": "POST",
		"path": "/v1/apps/{appId}/sheets/{sheetId}/unpublish",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"sheetId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateBookmark": {
		"method": "PATCH",
		"path": "/v1/apps/{appId}/bookmarks/{bookmarkId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"bookmarkId"
		],
		"query": [],
		"body": [
			{
				"name": "title",
				"required": false,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"addSpaceMember": {
		"method": "POST",
		"path": "/v1/spaces/{spaceId}/members",
		"read": false,
		"list": false,
		"pathParameters": [
			"spaceId"
		],
		"query": [],
		"body": [
			{
				"name": "type",
				"required": true,
				"json": false
			},
			{
				"name": "roles",
				"required": true,
				"json": false,
				"list": true
			},
			{
				"name": "assigneeId",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"addSpaceMemberRoles": {
		"method": "POST",
		"path": "/v1/spaces/{spaceId}/members-by-id/roles/add",
		"read": false,
		"list": false,
		"pathParameters": [
			"spaceId"
		],
		"query": [],
		"body": [
			{
				"name": "type",
				"required": false,
				"json": false
			},
			{
				"name": "assigneeId",
				"required": true,
				"json": false
			},
			{
				"name": "roles",
				"required": true,
				"json": false,
				"list": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createOrUpdateSpace": {
		"method": "POST",
		"path": "/v1/spaces",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [
			{
				"name": "spaceId",
				"option": false
			}
		],
		"body": [
			{
				"name": "name",
				"required": true,
				"json": false
			},
			{
				"name": "type",
				"required": true,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createSpaceShare": {
		"method": "POST",
		"path": "/v1/spaces/{spaceId}/shares",
		"read": false,
		"list": false,
		"pathParameters": [
			"spaceId"
		],
		"query": [],
		"body": [
			{
				"name": "type",
				"required": true,
				"json": false
			},
			{
				"name": "roles",
				"required": true,
				"json": false,
				"list": true
			},
			{
				"name": "assigneeId",
				"required": true,
				"json": false
			},
			{
				"name": "resourceId",
				"required": true,
				"json": false
			},
			{
				"name": "resourceType",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteSpace": {
		"method": "DELETE",
		"path": "/v1/spaces/{spaceId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"spaceId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteSpaceShare": {
		"method": "DELETE",
		"path": "/v1/spaces/{spaceId}/shares/{shareId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"shareId",
			"spaceId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getCurrentUser": {
		"method": "GET",
		"path": "/v1/current-user",
		"read": true,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getGroup": {
		"method": "GET",
		"path": "/v1/groups/{groupId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"groupId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getSpace": {
		"method": "GET",
		"path": "/v1/spaces/{spaceId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"spaceId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getSpaceMember": {
		"method": "GET",
		"path": "/v1/spaces/{spaceId}/members/{assignmentId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"assignmentId",
			"spaceId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getSpaceShare": {
		"method": "GET",
		"path": "/v1/spaces/{spaceId}/shares/{shareId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"shareId",
			"spaceId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getTenant": {
		"method": "GET",
		"path": "/v1/tenant",
		"read": true,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getUser": {
		"method": "GET",
		"path": "/v1/users/{userId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"userId"
		],
		"query": [
			{
				"name": "fields",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listGroups": {
		"method": "GET",
		"path": "/v1/groups",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "filter",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "systemGroups",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listSpaceMembers": {
		"method": "GET",
		"path": "/v1/spaces/{spaceId}/members",
		"read": true,
		"list": true,
		"pathParameters": [
			"spaceId"
		],
		"query": [
			{
				"name": "assigneeId",
				"option": true
			},
			{
				"name": "type",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listSpaceShares": {
		"method": "GET",
		"path": "/v1/spaces/{spaceId}/shares",
		"read": true,
		"list": true,
		"pathParameters": [
			"spaceId"
		],
		"query": [
			{
				"name": "groupId",
				"option": true
			},
			{
				"name": "name",
				"option": true
			},
			{
				"name": "resourceId",
				"option": true
			},
			{
				"name": "resourceType",
				"option": true
			},
			{
				"name": "type",
				"option": true
			},
			{
				"name": "userId",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listSpaceTypes": {
		"method": "GET",
		"path": "/v1/space-types",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listSpaces": {
		"method": "GET",
		"path": "/v1/spaces",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "action",
				"option": true
			},
			{
				"name": "name",
				"option": true
			},
			{
				"name": "ownerId",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "type",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listUsers": {
		"method": "GET",
		"path": "/v1/users",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "fields",
				"option": true
			},
			{
				"name": "filter",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"removeSpaceMember": {
		"method": "DELETE",
		"path": "/v1/spaces/{spaceId}/members/{assignmentId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"assignmentId",
			"spaceId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"removeSpaceMemberRoles": {
		"method": "POST",
		"path": "/v1/spaces/{spaceId}/members-by-id/roles/remove",
		"read": false,
		"list": false,
		"pathParameters": [
			"spaceId"
		],
		"query": [],
		"body": [
			{
				"name": "type",
				"required": false,
				"json": false
			},
			{
				"name": "assigneeId",
				"required": true,
				"json": false
			},
			{
				"name": "roles",
				"required": true,
				"json": false,
				"list": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"setSpaceMember": {
		"method": "PUT",
		"path": "/v1/spaces/{spaceId}/members-by-id",
		"read": false,
		"list": false,
		"pathParameters": [
			"spaceId"
		],
		"query": [],
		"body": [
			{
				"name": "type",
				"required": false,
				"json": false
			},
			{
				"name": "assigneeId",
				"required": true,
				"json": false
			},
			{
				"name": "roles",
				"required": false,
				"json": false,
				"list": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateSpaceMember": {
		"method": "PUT",
		"path": "/v1/spaces/{spaceId}/members/{assignmentId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"assignmentId",
			"spaceId"
		],
		"query": [],
		"body": [
			{
				"name": "roles",
				"required": false,
				"json": false,
				"list": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateSpaceShare": {
		"method": "PATCH",
		"path": "/v1/spaces/{spaceId}/shares/{shareId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"shareId",
			"spaceId"
		],
		"query": [],
		"body": [
			{
				"name": "roles",
				"required": true,
				"json": false,
				"list": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"copyDataConnection": {
		"method": "POST",
		"path": "/v1/data-connections/copy",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "id",
				"required": true,
				"json": false
			},
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "qPassword",
				"required": false,
				"json": false
			},
			{
				"name": "qUsername",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"copyDataFile": {
		"method": "POST",
		"path": "/v1/data-files/{dataFileId}/copy",
		"read": false,
		"list": false,
		"pathParameters": [
			"dataFileId"
		],
		"query": [
			{
				"name": "name",
				"option": false
			},
			{
				"name": "dataFileConnectionId",
				"option": false
			},
			{
				"name": "folderId",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createDataConnection": {
		"method": "POST",
		"path": "/v1/data-connections",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "qID",
				"required": false,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "owner",
				"required": false,
				"json": false
			},
			{
				"name": "qName",
				"required": false,
				"json": false
			},
			{
				"name": "qType",
				"required": false,
				"json": false
			},
			{
				"name": "space",
				"required": false,
				"json": false
			},
			{
				"name": "qLogOn",
				"required": false,
				"json": false
			},
			{
				"name": "qPassword",
				"required": false,
				"json": false
			},
			{
				"name": "qUsername",
				"required": false,
				"json": false
			},
			{
				"name": "datasourceID",
				"required": false,
				"json": false
			},
			{
				"name": "qriInRequest",
				"required": false,
				"json": false
			},
			{
				"name": "qArchitecture",
				"required": false,
				"json": false
			},
			{
				"name": "qCredentialsID",
				"required": false,
				"json": false
			},
			{
				"name": "qEngineObjectID",
				"required": false,
				"json": false
			},
			{
				"name": "qCredentialsName",
				"required": false,
				"json": false
			},
			{
				"name": "qConnectStatement",
				"required": false,
				"json": false
			},
			{
				"name": "qConnectionSecret",
				"required": false,
				"json": false
			},
			{
				"name": "qSeparateCredentials",
				"required": false,
				"json": false
			},
			{
				"name": "authUrlOnly",
				"required": false,
				"json": false
			},
			{
				"name": "connectionProperties",
				"required": false,
				"json": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createDataFolder": {
		"method": "POST",
		"path": "/v1/data-files/folders",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [
			{
				"name": "name",
				"option": false
			},
			{
				"name": "dataFileConnectionId",
				"option": false
			},
			{
				"name": "folderId",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteDataConnection": {
		"method": "DELETE",
		"path": "/v1/data-connections/{dataConnectionId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"dataConnectionId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteDataFile": {
		"method": "DELETE",
		"path": "/v1/data-files/{dataFileId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"dataFileId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteDataFiles": {
		"method": "POST",
		"path": "/v1/data-files/delete",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "ids",
				"required": true,
				"json": false,
				"list": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getChangeStore": {
		"method": "GET",
		"path": "/v1/change-stores/{storeId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"storeId"
		],
		"query": [
			{
				"name": "spaceId",
				"option": false
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getDataConnection": {
		"method": "GET",
		"path": "/v1/data-connections/{dataConnectionId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"dataConnectionId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getDataFile": {
		"method": "GET",
		"path": "/v1/data-files/{dataFileId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"dataFileId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getItem": {
		"method": "GET",
		"path": "/v1/items/{itemId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"itemId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listChangeStoreColumns": {
		"method": "GET",
		"path": "/v1/change-stores/{storeId}/columns",
		"read": true,
		"list": true,
		"pathParameters": [
			"storeId"
		],
		"query": [
			{
				"name": "spaceId",
				"option": false
			},
			{
				"name": "filter",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listChangeStoreTable": {
		"method": "GET",
		"path": "/v1/change-stores/{storeId}/table",
		"read": true,
		"list": true,
		"pathParameters": [
			"storeId"
		],
		"query": [
			{
				"name": "spaceId",
				"option": false
			},
			{
				"name": "filter",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listChangeStores": {
		"method": "GET",
		"path": "/v1/change-stores",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "filter",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "spaceId",
				"option": false
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listCurrentChanges": {
		"method": "GET",
		"path": "/v1/change-stores/{storeId}/changes",
		"read": true,
		"list": true,
		"pathParameters": [
			"storeId"
		],
		"query": [
			{
				"name": "spaceId",
				"option": false
			},
			{
				"name": "filter",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listDataConnections": {
		"method": "GET",
		"path": "/v1/data-connections",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "dataName",
				"option": true
			},
			{
				"name": "personal",
				"option": true
			},
			{
				"name": "owner",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "filter",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listDataFileConnections": {
		"method": "GET",
		"path": "/v1/data-file-connections",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "appId",
				"option": true
			},
			{
				"name": "name",
				"option": true
			},
			{
				"name": "personal",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "spaceId",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listDataFiles": {
		"method": "GET",
		"path": "/v1/data-files",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "appId",
				"option": true
			},
			{
				"name": "baseNameWildcard",
				"option": true
			},
			{
				"name": "dataFileConnectionId",
				"option": true
			},
			{
				"name": "folderPath",
				"option": true
			},
			{
				"name": "includeFolders",
				"option": true
			},
			{
				"name": "name",
				"option": true
			},
			{
				"name": "ownerId",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listItems": {
		"method": "GET",
		"path": "/v1/items",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "collectionId",
				"option": true
			},
			{
				"name": "name",
				"option": true
			},
			{
				"name": "ownerId",
				"option": true
			},
			{
				"name": "query",
				"option": true
			},
			{
				"name": "resourceType",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "spaceId",
				"option": true
			},
			{
				"name": "spaceType",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateDataConnection": {
		"method": "PUT",
		"path": "/v1/data-connections/{dataConnectionId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"dataConnectionId"
		],
		"query": [],
		"body": [
			{
				"name": "qID",
				"required": true,
				"json": false
			},
			{
				"name": "qName",
				"required": true,
				"json": false
			},
			{
				"name": "qType",
				"required": true,
				"json": false
			},
			{
				"name": "space",
				"required": false,
				"json": false
			},
			{
				"name": "qLogOn",
				"required": false,
				"json": false
			},
			{
				"name": "qPassword",
				"required": false,
				"json": false
			},
			{
				"name": "qUsername",
				"required": false,
				"json": false
			},
			{
				"name": "datasourceID",
				"required": false,
				"json": false
			},
			{
				"name": "qArchitecture",
				"required": false,
				"json": false
			},
			{
				"name": "qCredentialsID",
				"required": false,
				"json": false
			},
			{
				"name": "qEngineObjectID",
				"required": true,
				"json": false
			},
			{
				"name": "qCredentialsName",
				"required": false,
				"json": false
			},
			{
				"name": "qConnectStatement",
				"required": true,
				"json": false
			},
			{
				"name": "qConnectionSecret",
				"required": false,
				"json": false
			},
			{
				"name": "qSeparateCredentials",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"uploadDataFile": {
		"method": "POST",
		"path": "/v1/data-files/upload",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [
			{
				"name": "name",
				"option": false
			},
			{
				"name": "dataFileConnectionId",
				"option": false
			},
			{
				"name": "folderId",
				"option": true
			},
			{
				"name": "ifExists",
				"option": false
			},
			{
				"name": "dataFileId",
				"option": true
			}
		],
		"body": [],
		"fileInput": true,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"changeGlossaryTermStatus": {
		"method": "PUT",
		"path": "/v1/glossaries/{glossaryId}/terms/{termId}/status",
		"read": false,
		"list": false,
		"pathParameters": [
			"glossaryId",
			"termId"
		],
		"query": [
			{
				"name": "status",
				"option": false
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createDataAsset": {
		"method": "POST",
		"path": "/v1/data-assets",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "id",
				"required": false,
				"json": false
			},
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "appId",
				"required": false,
				"json": false
			},
			{
				"name": "appType",
				"required": true,
				"json": false
			},
			{
				"name": "ownerId",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "version",
				"required": false,
				"json": false
			},
			{
				"name": "properties",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "dataFreshness",
				"required": false,
				"json": false
			},
			{
				"name": "dataStoreInfo",
				"required": false,
				"json": true
			},
			{
				"name": "technicalName",
				"required": true,
				"json": false
			},
			{
				"name": "technicalDescription",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createDataStore": {
		"method": "POST",
		"path": "/v1/data-stores",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "id",
				"required": false,
				"json": false
			},
			{
				"name": "uri",
				"required": false,
				"json": false
			},
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "type",
				"required": true,
				"json": false
			},
			{
				"name": "ownerId",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "version",
				"required": false,
				"json": false
			},
			{
				"name": "properties",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "technicalName",
				"required": true,
				"json": false
			},
			{
				"name": "technicalDescription",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createDataset": {
		"method": "POST",
		"path": "/v1/datasets",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "id",
				"required": false,
				"json": false
			},
			{
				"name": "qri",
				"required": true,
				"json": false
			},
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "type",
				"required": false,
				"json": false
			},
			{
				"name": "schema",
				"required": false,
				"json": true
			},
			{
				"name": "ownerId",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "version",
				"required": false,
				"json": false
			},
			{
				"name": "secureQri",
				"required": true,
				"json": false
			},
			{
				"name": "properties",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "operational",
				"required": false,
				"json": true
			},
			{
				"name": "dataAssetInfo",
				"required": true,
				"json": true
			},
			{
				"name": "technicalName",
				"required": true,
				"json": false
			},
			{
				"name": "appTypeOverride",
				"required": false,
				"json": false
			},
			{
				"name": "additionalSchemas",
				"required": false,
				"json": true
			},
			{
				"name": "technicalDescription",
				"required": false,
				"json": false
			},
			{
				"name": "createdByConnectionId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createGlossary": {
		"method": "POST",
		"path": "/v1/glossaries",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": true,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "overview",
				"required": false,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "termTemplate",
				"required": false,
				"json": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createGlossaryCategory": {
		"method": "POST",
		"path": "/v1/glossaries/{glossaryId}/categories",
		"read": false,
		"list": false,
		"pathParameters": [
			"glossaryId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "parentId",
				"required": false,
				"json": false
			},
			{
				"name": "stewards",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createGlossaryTerm": {
		"method": "POST",
		"path": "/v1/glossaries/{glossaryId}/terms",
		"read": false,
		"list": false,
		"pathParameters": [
			"glossaryId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": true,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "linksTo",
				"required": false,
				"json": true
			},
			{
				"name": "stewards",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "relatesTo",
				"required": false,
				"json": true
			},
			{
				"name": "categories",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "abbreviation",
				"required": false,
				"json": false
			},
			{
				"name": "relatedInformation",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteDataAsset": {
		"method": "DELETE",
		"path": "/v1/data-assets/{dataAssetId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"dataAssetId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteDataset": {
		"method": "DELETE",
		"path": "/v1/datasets/{datasetId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"datasetId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteGlossary": {
		"method": "DELETE",
		"path": "/v1/glossaries/{glossaryId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"glossaryId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteGlossaryCategory": {
		"method": "DELETE",
		"path": "/v1/glossaries/{glossaryId}/categories/{categoryId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"categoryId",
			"glossaryId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteGlossaryTerm": {
		"method": "DELETE",
		"path": "/v1/glossaries/{glossaryId}/terms/{termId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"glossaryId",
			"termId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"exportGlossary": {
		"method": "GET",
		"path": "/v1/glossaries/{glossaryId}/export",
		"read": true,
		"list": false,
		"pathParameters": [
			"glossaryId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getDataAsset": {
		"method": "GET",
		"path": "/v1/data-assets/{dataAssetId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"dataAssetId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getDataStore": {
		"method": "GET",
		"path": "/v1/data-stores/{dataStoreId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"dataStoreId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getDataset": {
		"method": "GET",
		"path": "/v1/datasets/{datasetId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"datasetId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getGlossary": {
		"method": "GET",
		"path": "/v1/glossaries/{glossaryId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"glossaryId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getGlossaryCategory": {
		"method": "GET",
		"path": "/v1/glossaries/{glossaryId}/categories/{categoryId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"categoryId",
			"glossaryId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getGlossaryTerm": {
		"method": "GET",
		"path": "/v1/glossaries/{glossaryId}/terms/{termId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"glossaryId",
			"termId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"importGlossary": {
		"method": "POST",
		"path": "/v1/glossaries/import",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [
			{
				"name": "importerAsFallbackSteward",
				"option": true
			},
			{
				"name": "lookupUserOnEmail",
				"option": true
			},
			{
				"name": "spaceId",
				"option": true
			}
		],
		"body": [
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "terms",
				"required": false,
				"json": true
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "overview",
				"required": false,
				"json": false
			},
			{
				"name": "categories",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "termTemplate",
				"required": false,
				"json": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listDataAssets": {
		"method": "GET",
		"path": "/v1/data-stores/{dataStoreId}/data-assets",
		"read": true,
		"list": true,
		"pathParameters": [
			"dataStoreId"
		],
		"query": [
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listDataStores": {
		"method": "GET",
		"path": "/v1/data-stores",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listDatasets": {
		"method": "GET",
		"path": "/v1/data-stores/{dataStoreId}/data-assets/{dataAssetId}/datasets",
		"read": true,
		"list": true,
		"pathParameters": [
			"dataAssetId",
			"dataStoreId"
		],
		"query": [
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listGlossaries": {
		"method": "GET",
		"path": "/v1/glossaries",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listGlossaryCategories": {
		"method": "GET",
		"path": "/v1/glossaries/{glossaryId}/categories",
		"read": true,
		"list": true,
		"pathParameters": [
			"glossaryId"
		],
		"query": [
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listGlossaryTerms": {
		"method": "GET",
		"path": "/v1/glossaries/{glossaryId}/terms",
		"read": true,
		"list": true,
		"pathParameters": [
			"glossaryId"
		],
		"query": [
			{
				"name": "filter",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateDataAsset": {
		"method": "PUT",
		"path": "/v1/data-assets/{dataAssetId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"dataAssetId"
		],
		"query": [],
		"body": [
			{
				"name": "id",
				"required": false,
				"json": false
			},
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "appId",
				"required": false,
				"json": false
			},
			{
				"name": "appType",
				"required": true,
				"json": false
			},
			{
				"name": "ownerId",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "version",
				"required": false,
				"json": false
			},
			{
				"name": "properties",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "dataFreshness",
				"required": false,
				"json": false
			},
			{
				"name": "dataStoreInfo",
				"required": false,
				"json": true
			},
			{
				"name": "technicalName",
				"required": true,
				"json": false
			},
			{
				"name": "technicalDescription",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateDataStore": {
		"method": "PUT",
		"path": "/v1/data-stores/{dataStoreId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"dataStoreId"
		],
		"query": [],
		"body": [
			{
				"name": "id",
				"required": false,
				"json": false
			},
			{
				"name": "uri",
				"required": false,
				"json": false
			},
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "type",
				"required": true,
				"json": false
			},
			{
				"name": "ownerId",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "version",
				"required": false,
				"json": false
			},
			{
				"name": "properties",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "technicalName",
				"required": true,
				"json": false
			},
			{
				"name": "technicalDescription",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateDataset": {
		"method": "PUT",
		"path": "/v1/datasets/{datasetId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"datasetId"
		],
		"query": [],
		"body": [
			{
				"name": "id",
				"required": false,
				"json": false
			},
			{
				"name": "qri",
				"required": true,
				"json": false
			},
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "type",
				"required": false,
				"json": false
			},
			{
				"name": "schema",
				"required": false,
				"json": true
			},
			{
				"name": "ownerId",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "version",
				"required": false,
				"json": false
			},
			{
				"name": "secureQri",
				"required": true,
				"json": false
			},
			{
				"name": "properties",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "operational",
				"required": false,
				"json": true
			},
			{
				"name": "dataAssetInfo",
				"required": true,
				"json": true
			},
			{
				"name": "technicalName",
				"required": true,
				"json": false
			},
			{
				"name": "appTypeOverride",
				"required": false,
				"json": false
			},
			{
				"name": "additionalSchemas",
				"required": false,
				"json": true
			},
			{
				"name": "technicalDescription",
				"required": false,
				"json": false
			},
			{
				"name": "createdByConnectionId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateGlossary": {
		"method": "PUT",
		"path": "/v1/glossaries/{glossaryId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"glossaryId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": true,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "overview",
				"required": false,
				"json": false
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "termTemplate",
				"required": false,
				"json": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateGlossaryCategory": {
		"method": "PUT",
		"path": "/v1/glossaries/{glossaryId}/categories/{categoryId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"categoryId",
			"glossaryId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "parentId",
				"required": false,
				"json": false
			},
			{
				"name": "stewards",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateGlossaryTerm": {
		"method": "PUT",
		"path": "/v1/glossaries/{glossaryId}/terms/{termId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"glossaryId",
			"termId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": true,
				"json": false
			},
			{
				"name": "tags",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "linksTo",
				"required": false,
				"json": true
			},
			{
				"name": "stewards",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "relatesTo",
				"required": false,
				"json": true
			},
			{
				"name": "categories",
				"required": false,
				"json": false,
				"list": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "abbreviation",
				"required": false,
				"json": false
			},
			{
				"name": "relatedInformation",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"copyAutomation": {
		"method": "POST",
		"path": "/v1/automations/{automationId}/copy",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createAutomation": {
		"method": "POST",
		"path": "/v1/automations",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "schedules",
				"required": false,
				"json": true
			},
			{
				"name": "workspace",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "maxConcurrentRuns",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"createAutomationConnection": {
		"method": "POST",
		"path": "/v1/automation-connections",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "params",
				"required": false,
				"json": true
			},
			{
				"name": "spaceId",
				"required": false,
				"json": false
			},
			{
				"name": "connectorId",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteAutomation": {
		"method": "DELETE",
		"path": "/v1/automations/{automationId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"deleteAutomationConnection": {
		"method": "DELETE",
		"path": "/v1/automation-connections/{automationConnectionId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationConnectionId"
		],
		"query": [
			{
				"name": "forced",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"disableAutomation": {
		"method": "POST",
		"path": "/v1/automations/{automationId}/disable",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"enableAutomation": {
		"method": "POST",
		"path": "/v1/automations/{automationId}/enable",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"exportAutomationRun": {
		"method": "POST",
		"path": "/v1/automations/{automationId}/runs/{runId}/export",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId",
			"runId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getAutomation": {
		"method": "GET",
		"path": "/v1/automations/{automationId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"automationId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getAutomationConnection": {
		"method": "GET",
		"path": "/v1/automation-connections/{automationConnectionId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"automationConnectionId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"getAutomationRun": {
		"method": "GET",
		"path": "/v1/automations/{automationId}/runs/{runId}",
		"read": true,
		"list": false,
		"pathParameters": [
			"automationId",
			"runId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listAutomationConnections": {
		"method": "GET",
		"path": "/v1/automation-connections",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "filter",
				"option": true
			},
			{
				"name": "listAll",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listAutomationRuns": {
		"method": "GET",
		"path": "/v1/automations/{automationId}/runs",
		"read": true,
		"list": true,
		"pathParameters": [
			"automationId"
		],
		"query": [
			{
				"name": "filter",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listAutomations": {
		"method": "GET",
		"path": "/v1/automations",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "filter",
				"option": true
			},
			{
				"name": "listAll",
				"option": true
			},
			{
				"name": "sort",
				"option": true
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"moveAutomationConnectionToSpace": {
		"method": "PUT",
		"path": "/v1/automation-connections/{automationConnectionId}/space",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationConnectionId"
		],
		"query": [],
		"body": [
			{
				"name": "spaceId",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"moveAutomationToSpace": {
		"method": "PUT",
		"path": "/v1/automations/{automationId}/space",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId"
		],
		"query": [],
		"body": [
			{
				"name": "spaceId",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"retryAutomationRun": {
		"method": "POST",
		"path": "/v1/automations/{automationId}/runs/{runId}/retry",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId",
			"runId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"runAutomation": {
		"method": "POST",
		"path": "/v1/automations/{automationId}/runs",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId"
		],
		"query": [],
		"body": [
			{
				"name": "context",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"stopAutomationRun": {
		"method": "POST",
		"path": "/v1/automations/{automationId}/runs/{runId}/stop",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId",
			"runId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateAutomation": {
		"method": "PUT",
		"path": "/v1/automations/{automationId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "schedules",
				"required": false,
				"json": true
			},
			{
				"name": "workspace",
				"required": false,
				"json": true
			},
			{
				"name": "description",
				"required": false,
				"json": false
			},
			{
				"name": "maxConcurrentRuns",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"updateAutomationConnection": {
		"method": "PUT",
		"path": "/v1/automation-connections/{automationConnectionId}",
		"read": false,
		"list": false,
		"pathParameters": [
			"automationConnectionId"
		],
		"query": [],
		"body": [
			{
				"name": "name",
				"required": false,
				"json": false
			},
			{
				"name": "params",
				"required": false,
				"json": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"downloadAncoreShareFile": {
		"method": "POST",
		"path": "/v1/ancoreshare/files/download",
		"read": false,
		"list": false,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "url",
				"required": true,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": true,
		"filesOutput": false,
		"async": false
	},
	"downloadAncoreShareFiles": {
		"method": "POST",
		"path": "/v1/ancoreshare/files/download-all",
		"read": false,
		"list": true,
		"pathParameters": [],
		"query": [],
		"body": [
			{
				"name": "urls",
				"required": true,
				"json": false,
				"list": true
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": true,
		"async": false
	},
	"getAncoreShareReportUsage": {
		"method": "GET",
		"path": "/v1/ancoreshare/usage",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "accountId",
				"option": false
			},
			{
				"name": "appId",
				"option": false
			},
			{
				"name": "reportId",
				"option": false
			},
			{
				"name": "userId",
				"option": false
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listAncoreShareAutomatedRuns": {
		"method": "GET",
		"path": "/v1/ancoreshare/runs",
		"read": true,
		"list": true,
		"pathParameters": [],
		"query": [
			{
				"name": "accountId",
				"option": false
			},
			{
				"name": "appId",
				"option": false
			},
			{
				"name": "reportId",
				"option": false
			},
			{
				"name": "taskId",
				"option": false
			},
			{
				"name": "limit",
				"option": true
			}
		],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"listAncoreShareReports": {
		"method": "GET",
		"path": "/v1/ancoreshare/apps/{appId}/reports",
		"read": true,
		"list": true,
		"pathParameters": [
			"appId"
		],
		"query": [],
		"body": [],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	},
	"runAncoreShareReport": {
		"method": "POST",
		"path": "/v1/ancoreshare/apps/{appId}/reports/{reportId}/run",
		"read": false,
		"list": false,
		"pathParameters": [
			"appId",
			"reportId"
		],
		"query": [],
		"body": [
			{
				"name": "accountId",
				"required": true,
				"json": false
			},
			{
				"name": "executionToken",
				"required": true,
				"json": false
			},
			{
				"name": "exportType",
				"required": false,
				"json": false
			},
			{
				"name": "bookmark",
				"required": false,
				"json": false
			},
			{
				"name": "select",
				"required": false,
				"json": false
			},
			{
				"name": "notification",
				"required": false,
				"json": false
			},
			{
				"name": "notificationEmail",
				"required": false,
				"json": false
			}
		],
		"fileInput": false,
		"fileOutput": false,
		"filesOutput": false,
		"async": false
	}
};

export class AncoreMate implements INodeType {
	description: INodeTypeDescription = {
		"displayName": "ancoreMate",
		"name": "ancoreMate",
		"icon": {
			"light": "file:ancoremate.svg",
			"dark": "file:ancoremate.dark.svg"
		},
		"group": [
			"transform"
		],
		"version": 1,
		"subtitle": "={{$parameter[\"operation\"] + \": \" + $parameter[\"resource\"]}}",
		"description": "Automate Qlik Cloud®: apps, reloads, app data, spaces and access, content, catalog, automations and ancoreShare reports. Qlik® and Qlik Cloud® are trademarks of QlikTech International AB. ancoreMate is not affiliated with or endorsed by Qlik.",
		"defaults": {
			"name": "ancoreMate"
		},
		"codex": {
			"categories": [
				"Analytics",
				"Data & Storage"
			],
			"alias": [
				"Qlik",
				"Qlik Cloud",
				"Qlik Sense",
				"ancoreShare",
				"Reload",
				"Analytics"
			],
			"resources": {
				"credentialDocumentation": [
					{
						"url": "https://ancoresoft.com/help/ancoremate/get-started/n8n"
					}
				],
				"primaryDocumentation": [
					{
						"url": "https://ancoresoft.com/help/ancoremate/get-started/n8n"
					}
				]
			}
		},
		"usableAsTool": true,
		"inputs": [NodeConnectionTypes.Main],
		"outputs": [NodeConnectionTypes.Main],
		"credentials": [
			{
				"name": "ancoreMateOAuth2Api",
				"required": true
			}
		],
		"properties": [
			{
				"displayName": "Resource",
				"name": "resource",
				"type": "options",
				"noDataExpression": true,
				"options": [
					{
						"name": "App",
						"value": "app"
					},
					{
						"name": "App evaluation",
						"value": "app evaluation"
					},
					{
						"name": "App media",
						"value": "app media"
					},
					{
						"name": "Automation",
						"value": "automation"
					},
					{
						"name": "Automation connection",
						"value": "automation connection"
					},
					{
						"name": "Automation run",
						"value": "automation run"
					},
					{
						"name": "Bookmark",
						"value": "bookmark"
					},
					{
						"name": "Change store",
						"value": "change store"
					},
					{
						"name": "Data",
						"value": "data"
					},
					{
						"name": "Data asset",
						"value": "data asset"
					},
					{
						"name": "Data connection",
						"value": "data connection"
					},
					{
						"name": "Data file",
						"value": "data file"
					},
					{
						"name": "Data store",
						"value": "data store"
					},
					{
						"name": "Dataset",
						"value": "dataset"
					},
					{
						"name": "Field",
						"value": "field"
					},
					{
						"name": "Glossary",
						"value": "glossary"
					},
					{
						"name": "Glossary category",
						"value": "glossary category"
					},
					{
						"name": "Glossary term",
						"value": "glossary term"
					},
					{
						"name": "Group",
						"value": "group"
					},
					{
						"name": "Item",
						"value": "item"
					},
					{
						"name": "Load script",
						"value": "load script"
					},
					{
						"name": "Master dimension",
						"value": "master dimension"
					},
					{
						"name": "Master measure",
						"value": "master measure"
					},
					{
						"name": "Object",
						"value": "object"
					},
					{
						"name": "Reload",
						"value": "reload"
					},
					{
						"name": "Reload log",
						"value": "reload log"
					},
					{
						"name": "Reload task",
						"value": "reload task"
					},
					{
						"name": "Report",
						"value": "report"
					},
					{
						"name": "Report file",
						"value": "report file"
					},
					{
						"name": "Script",
						"value": "script"
					},
					{
						"name": "Sheet",
						"value": "sheet"
					},
					{
						"name": "Space",
						"value": "space"
					},
					{
						"name": "Space member",
						"value": "space member"
					},
					{
						"name": "Space share",
						"value": "space share"
					},
					{
						"name": "Tenant",
						"value": "tenant"
					},
					{
						"name": "Usage",
						"value": "usage"
					},
					{
						"name": "User",
						"value": "user"
					},
					{
						"name": "Variable",
						"value": "variable"
					},
					{
						"name": "ancoreShare Report",
						"value": "ancoreShare Report"
					},
					{
						"name": "Connection",
						"value": "connection"
					},
					{
						"name": "Request",
						"value": "request"
					}
				],
				"default": "app"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						]
					}
				},
				"options": [
					{
						"name": "Change Owner",
						"value": "changeAppOwner",
						"action": "Change app owner",
						"description": "Transfers an app to another user."
					},
					{
						"name": "Copy",
						"value": "copyApp",
						"action": "Copy app",
						"description": "Creates a copy of an app, optionally with a new name or in another space."
					},
					{
						"name": "Create",
						"value": "createApp",
						"action": "Create app",
						"description": "Creates an empty app."
					},
					{
						"name": "Delete",
						"value": "deleteApp",
						"action": "Delete app",
						"description": "Deletes an app."
					},
					{
						"name": "Export",
						"value": "exportApp",
						"action": "Export app",
						"description": "Exports an app as QVF file, optionally without data. Files up to 30 MB can be sent and files up to 50 MB returned."
					},
					{
						"name": "Get",
						"value": "getApp",
						"action": "Get app",
						"description": "Returns the attributes of an app such as name, owner, space and last reload time."
					},
					{
						"name": "Get Data Lineage",
						"value": "getAppDataLineage",
						"action": "Get app data lineage",
						"description": "Returns the data sources the app loads from."
					},
					{
						"name": "Get Data Model",
						"value": "getAppDataMetadata",
						"action": "Get app data model",
						"description": "Returns the tables and fields of the app data model with their sizes."
					},
					{
						"name": "Import",
						"value": "importApp",
						"action": "Import app",
						"description": "Imports a QVF file as a new app into a space or the personal space. Files up to 30 MB can be sent and files up to 50 MB returned."
					},
					{
						"name": "Get Many",
						"value": "getApps",
						"action": "List apps",
						"description": "Lists the Qlik Sense apps of the tenant that the connected Qlik Cloud user has access to, sorted by name."
					},
					{
						"name": "Move to Space",
						"value": "moveAppToSpace",
						"action": "Move app to space",
						"description": "Moves an app to another shared space."
					},
					{
						"name": "Publish",
						"value": "publishApp",
						"action": "Publish app",
						"description": "Publishes an app to a managed space for the first time. Publishing the same app again creates a second published app; use Republish app to update a published app."
					},
					{
						"name": "Republish",
						"value": "republishApp",
						"action": "Republish app",
						"description": "Replaces a published app in a managed space with the current version of the source app."
					},
					{
						"name": "Update",
						"value": "updateApp",
						"action": "Update app",
						"description": "Changes the name or description of an app."
					}
				],
				"default": "changeAppOwner"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app evaluation"
						]
					}
				},
				"options": [
					{
						"name": "Evaluate App Performance",
						"value": "evaluateAppPerformance",
						"action": "Evaluate app performance",
						"description": "Starts a performance evaluation of an app. Get the result with Get app evaluation."
					},
					{
						"name": "Get",
						"value": "getAppEvaluation",
						"action": "Get app evaluation",
						"description": "Returns the result of a performance evaluation."
					},
					{
						"name": "Get Many",
						"value": "listAppEvaluations",
						"action": "List app evaluations",
						"description": "Lists the performance evaluations of an app."
					}
				],
				"default": "evaluateAppPerformance"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						]
					}
				},
				"options": [
					{
						"name": "Delete File",
						"value": "deleteAppMediaFile",
						"action": "Delete app media file",
						"description": "Deletes a file from the media library of an app."
					},
					{
						"name": "Get File",
						"value": "getAppMediaFile",
						"action": "Get app media file",
						"description": "Downloads a file from the media library of an app, or the thumbnail of the app. Files up to 30 MB can be sent and files up to 50 MB returned."
					},
					{
						"name": "Get Many Files",
						"value": "listAppMediaFiles",
						"action": "List app media files",
						"description": "Lists the images and other files in the media library of an app."
					},
					{
						"name": "Upload File",
						"value": "uploadAppMediaFile",
						"action": "Upload app media file",
						"description": "Uploads an image or other file into the media library of an app; an existing file is replaced. Files up to 30 MB can be sent and files up to 50 MB returned."
					}
				],
				"default": "deleteAppMediaFile"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						]
					}
				},
				"options": [
					{
						"name": "Copy",
						"value": "copyAutomation",
						"action": "Copy automation",
						"description": "Creates a copy of an automation."
					},
					{
						"name": "Create",
						"value": "createAutomation",
						"action": "Create automation",
						"description": "Creates an automation in Qlik Automate."
					},
					{
						"name": "Delete",
						"value": "deleteAutomation",
						"action": "Delete automation",
						"description": "Deletes an automation."
					},
					{
						"name": "Disable",
						"value": "disableAutomation",
						"action": "Disable automation",
						"description": "Disables an automation so that it no longer runs."
					},
					{
						"name": "Enable",
						"value": "enableAutomation",
						"action": "Enable automation",
						"description": "Enables an automation so that it runs on its triggers again."
					},
					{
						"name": "Get",
						"value": "getAutomation",
						"action": "Get automation",
						"description": "Returns an automation of Qlik Automate."
					},
					{
						"name": "Get Many",
						"value": "listAutomations",
						"action": "List automations",
						"description": "Lists the automations of Qlik Automate the connected user can see."
					},
					{
						"name": "Move to Space",
						"value": "moveAutomationToSpace",
						"action": "Move automation to space",
						"description": "Moves an automation to another space."
					},
					{
						"name": "Update",
						"value": "updateAutomation",
						"action": "Update automation",
						"description": "Replaces the definition of an automation."
					}
				],
				"default": "copyAutomation"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createAutomationConnection",
						"action": "Create automation connection",
						"description": "Creates a connection for automations."
					},
					{
						"name": "Delete",
						"value": "deleteAutomationConnection",
						"action": "Delete automation connection",
						"description": "Deletes an automation connection."
					},
					{
						"name": "Get",
						"value": "getAutomationConnection",
						"action": "Get automation connection",
						"description": "Returns an automation connection."
					},
					{
						"name": "Get Many",
						"value": "listAutomationConnections",
						"action": "List automation connections",
						"description": "Lists the connections that automations use to reach other services."
					},
					{
						"name": "Move to Space",
						"value": "moveAutomationConnectionToSpace",
						"action": "Move automation connection to space",
						"description": "Moves an automation connection to another space."
					},
					{
						"name": "Update",
						"value": "updateAutomationConnection",
						"action": "Update automation connection",
						"description": "Changes the name or parameters of an automation connection."
					}
				],
				"default": "createAutomationConnection"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						]
					}
				},
				"options": [
					{
						"name": "Export",
						"value": "exportAutomationRun",
						"action": "Export automation run",
						"description": "Returns a link to the detailed log of a run."
					},
					{
						"name": "Get",
						"value": "getAutomationRun",
						"action": "Get automation run",
						"description": "Returns a run of an automation with its status."
					},
					{
						"name": "Get Many",
						"value": "listAutomationRuns",
						"action": "List automation runs",
						"description": "Lists the runs of an automation, newest first."
					},
					{
						"name": "Retry",
						"value": "retryAutomationRun",
						"action": "Retry automation run",
						"description": "Runs a failed run of an automation again."
					},
					{
						"name": "Run Automation",
						"value": "runAutomation",
						"action": "Run automation",
						"description": "Starts a run of an automation."
					},
					{
						"name": "Stop",
						"value": "stopAutomationRun",
						"action": "Stop automation run",
						"description": "Stops a running run of an automation."
					}
				],
				"default": "exportAutomationRun"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createBookmark",
						"action": "Create bookmark",
						"description": "Saves selections as a bookmark, optionally published."
					},
					{
						"name": "Delete",
						"value": "deleteBookmark",
						"action": "Delete bookmark",
						"description": "Deletes a bookmark."
					},
					{
						"name": "Get Many",
						"value": "listBookmarks",
						"action": "List bookmarks",
						"description": "Lists the bookmarks of an app."
					},
					{
						"name": "Publish",
						"value": "publishBookmark",
						"action": "Publish bookmark",
						"description": "Publishes a bookmark for the other users of the app."
					},
					{
						"name": "Unpublish",
						"value": "unpublishBookmark",
						"action": "Unpublish bookmark",
						"description": "Makes a published bookmark private again."
					},
					{
						"name": "Update",
						"value": "updateBookmark",
						"action": "Update bookmark",
						"description": "Changes the title or description of a bookmark."
					}
				],
				"default": "createBookmark"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						]
					}
				},
				"options": [
					{
						"name": "Get",
						"value": "getChangeStore",
						"action": "Get change store",
						"description": "Returns a change store."
					},
					{
						"name": "Get Many Columns",
						"value": "listChangeStoreColumns",
						"action": "List change store columns",
						"description": "Lists the editable columns of a change store."
					},
					{
						"name": "Get Many Table",
						"value": "listChangeStoreTable",
						"action": "List change store table",
						"description": "Lists the edits of a change store as table rows."
					},
					{
						"name": "Get Many",
						"value": "listChangeStores",
						"action": "List change stores",
						"description": "Lists the change stores that keep the edits of write tables."
					},
					{
						"name": "Get Many Current Changes",
						"value": "listCurrentChanges",
						"action": "List current changes",
						"description": "Lists the current edits in a change store."
					}
				],
				"default": "getChangeStore"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						]
					}
				},
				"options": [
					{
						"name": "Evaluate Expression",
						"value": "evaluateExpression",
						"action": "Evaluate expression",
						"description": "Calculates an expression such as Sum(Sales) with the given selections."
					},
					{
						"name": "Get Measure Value",
						"value": "getMeasureValue",
						"action": "Get measure value",
						"description": "Calculates a master measure with the given selections."
					},
					{
						"name": "Get Table Data",
						"value": "getTableData",
						"action": "Get table data",
						"description": "Returns the rows of a table or chart of the app with the given selections."
					},
					{
						"name": "Get Table Data for Fields",
						"value": "getTableDataForFields",
						"action": "Get table data for fields",
						"description": "Builds a table from dimensions and measures and returns its rows with the given selections."
					}
				],
				"default": "evaluateExpression"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createDataAsset",
						"action": "Create data asset",
						"description": "Creates a data asset in a data store."
					},
					{
						"name": "Delete",
						"value": "deleteDataAsset",
						"action": "Delete data asset",
						"description": "Deletes a data asset."
					},
					{
						"name": "Get",
						"value": "getDataAsset",
						"action": "Get data asset",
						"description": "Returns a data asset."
					},
					{
						"name": "Get Many",
						"value": "listDataAssets",
						"action": "List data assets",
						"description": "Lists the data assets of a data store."
					},
					{
						"name": "Update",
						"value": "updateDataAsset",
						"action": "Update data asset",
						"description": "Replaces the attributes of a data asset."
					}
				],
				"default": "createDataAsset"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						]
					}
				},
				"options": [
					{
						"name": "Copy",
						"value": "copyDataConnection",
						"action": "Copy data connection",
						"description": "Creates a copy of a data connection, optionally in another space."
					},
					{
						"name": "Create",
						"value": "createDataConnection",
						"action": "Create data connection",
						"description": "Creates a data connection in a space."
					},
					{
						"name": "Delete",
						"value": "deleteDataConnection",
						"action": "Delete data connection",
						"description": "Deletes a data connection."
					},
					{
						"name": "Get",
						"value": "getDataConnection",
						"action": "Get data connection",
						"description": "Returns a data connection."
					},
					{
						"name": "Get Many",
						"value": "listDataConnections",
						"action": "List data connections",
						"description": "Lists the data connections the connected user can use."
					},
					{
						"name": "Update",
						"value": "updateDataConnection",
						"action": "Update data connection",
						"description": "Replaces the settings of a data connection."
					}
				],
				"default": "copyDataConnection"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						]
					}
				},
				"options": [
					{
						"name": "Copy",
						"value": "copyDataFile",
						"action": "Copy data file",
						"description": "Copies a data file under a new name, optionally into another space."
					},
					{
						"name": "Create Data Folder",
						"value": "createDataFolder",
						"action": "Create data folder",
						"description": "Creates a folder for data files in a space or the personal space."
					},
					{
						"name": "Delete Data File",
						"value": "deleteDataFile",
						"action": "Delete data file",
						"description": "Deletes a data file."
					},
					{
						"name": "Delete Data Files",
						"value": "deleteDataFiles",
						"action": "Delete data files",
						"description": "Deletes several data files at once."
					},
					{
						"name": "Get",
						"value": "getDataFile",
						"action": "Get data file",
						"description": "Returns the details of a data file."
					},
					{
						"name": "Get Many Connections",
						"value": "listDataFileConnections",
						"action": "List data file connections",
						"description": "Lists the data file connections, one per space with data files."
					},
					{
						"name": "Get Many",
						"value": "listDataFiles",
						"action": "List data files",
						"description": "Lists the data files in a space or in the personal space."
					},
					{
						"name": "Upload",
						"value": "uploadDataFile",
						"action": "Upload data file",
						"description": "Uploads a data file, for example CSV or Excel, into a space or the personal space. A file with the same name is replaced unless If the file exists is set to Fail. Files up to 30 MB can be sent and files up to 50 MB returned."
					}
				],
				"default": "copyDataFile"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createDataStore",
						"action": "Create data store",
						"description": "Creates a data store in the catalog."
					},
					{
						"name": "Get",
						"value": "getDataStore",
						"action": "Get data store",
						"description": "Returns a data store."
					},
					{
						"name": "Get Many",
						"value": "listDataStores",
						"action": "List data stores",
						"description": "Lists the data stores of the catalog."
					},
					{
						"name": "Update",
						"value": "updateDataStore",
						"action": "Update data store",
						"description": "Replaces the attributes of a data store."
					}
				],
				"default": "createDataStore"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createDataset",
						"action": "Create dataset",
						"description": "Creates a dataset in a data asset."
					},
					{
						"name": "Delete",
						"value": "deleteDataset",
						"action": "Delete dataset",
						"description": "Deletes a dataset."
					},
					{
						"name": "Get",
						"value": "getDataset",
						"action": "Get dataset",
						"description": "Returns a dataset with its schema."
					},
					{
						"name": "Get Many",
						"value": "listDatasets",
						"action": "List datasets",
						"description": "Lists the datasets of a data asset."
					},
					{
						"name": "Update",
						"value": "updateDataset",
						"action": "Update dataset",
						"description": "Replaces the attributes of a dataset."
					}
				],
				"default": "createDataset"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"field"
						]
					}
				},
				"options": [
					{
						"name": "Get Many Values",
						"value": "listFieldValues",
						"action": "List field values",
						"description": "Lists the values of a field, optionally only those possible with the given selections."
					},
					{
						"name": "Get Many",
						"value": "getAppFields",
						"action": "List fields",
						"description": "Lists the fields of the data model of a Qlik Sense app with their number of distinct values and tags."
					},
					{
						"name": "Set Always One Selected Value",
						"value": "setAlwaysOneSelectedValue",
						"action": "Set always one selected value",
						"description": "Switches the setting that a field always has exactly one selected value."
					}
				],
				"default": "listFieldValues"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createGlossary",
						"action": "Create glossary",
						"description": "Creates a business glossary."
					},
					{
						"name": "Delete",
						"value": "deleteGlossary",
						"action": "Delete glossary",
						"description": "Deletes a glossary with its categories and terms."
					},
					{
						"name": "Export",
						"value": "exportGlossary",
						"action": "Export glossary",
						"description": "Exports a glossary with its categories and terms as JSON."
					},
					{
						"name": "Get",
						"value": "getGlossary",
						"action": "Get glossary",
						"description": "Returns a business glossary."
					},
					{
						"name": "Import",
						"value": "importGlossary",
						"action": "Import glossary",
						"description": "Creates a glossary from an exported glossary."
					},
					{
						"name": "Get Many",
						"value": "listGlossaries",
						"action": "List glossaries",
						"description": "Lists the business glossaries."
					},
					{
						"name": "Update",
						"value": "updateGlossary",
						"action": "Update glossary",
						"description": "Replaces the name, description and settings of a glossary."
					}
				],
				"default": "createGlossary"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createGlossaryCategory",
						"action": "Create glossary category",
						"description": "Creates a category in a glossary."
					},
					{
						"name": "Delete",
						"value": "deleteGlossaryCategory",
						"action": "Delete glossary category",
						"description": "Deletes a category of a glossary."
					},
					{
						"name": "Get",
						"value": "getGlossaryCategory",
						"action": "Get glossary category",
						"description": "Returns a category of a glossary."
					},
					{
						"name": "Get Many",
						"value": "listGlossaryCategories",
						"action": "List glossary categories",
						"description": "Lists the categories of a glossary."
					},
					{
						"name": "Update",
						"value": "updateGlossaryCategory",
						"action": "Update glossary category",
						"description": "Replaces the name and description of a glossary category."
					}
				],
				"default": "createGlossaryCategory"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						]
					}
				},
				"options": [
					{
						"name": "Change Status",
						"value": "changeGlossaryTermStatus",
						"action": "Change glossary term status",
						"description": "Sets the status of a glossary term, for example verified."
					},
					{
						"name": "Create",
						"value": "createGlossaryTerm",
						"action": "Create glossary term",
						"description": "Creates a term in a glossary."
					},
					{
						"name": "Delete",
						"value": "deleteGlossaryTerm",
						"action": "Delete glossary term",
						"description": "Deletes a term of a glossary."
					},
					{
						"name": "Get",
						"value": "getGlossaryTerm",
						"action": "Get glossary term",
						"description": "Returns a term of a glossary."
					},
					{
						"name": "Get Many",
						"value": "listGlossaryTerms",
						"action": "List glossary terms",
						"description": "Lists the terms of a glossary."
					},
					{
						"name": "Update",
						"value": "updateGlossaryTerm",
						"action": "Update glossary term",
						"description": "Replaces the definition and attributes of a glossary term."
					}
				],
				"default": "changeGlossaryTermStatus"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"group"
						]
					}
				},
				"options": [
					{
						"name": "Get",
						"value": "getGroup",
						"action": "Get group",
						"description": "Returns a group of the tenant."
					},
					{
						"name": "Get Many",
						"value": "listGroups",
						"action": "List groups",
						"description": "Lists the groups of the tenant. Use the filter to search, for example name eq \"Finance\"."
					}
				],
				"default": "getGroup"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"item"
						]
					}
				},
				"options": [
					{
						"name": "Get",
						"value": "getItem",
						"action": "Get item",
						"description": "Returns an item of the tenant."
					},
					{
						"name": "Get Many",
						"value": "listItems",
						"action": "List items",
						"description": "Lists the items of the tenant such as apps, data files, notes and automations. Filter by type, name or space."
					}
				],
				"default": "getItem"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						]
					}
				},
				"options": [
					{
						"name": "Get",
						"value": "getLoadScript",
						"action": "Get load script",
						"description": "Returns the current load script of an app."
					},
					{
						"name": "Get Version",
						"value": "getLoadScriptVersion",
						"action": "Get load script version",
						"description": "Returns a saved version of the load script of an app."
					},
					{
						"name": "Get Many Versions",
						"value": "listLoadScriptVersions",
						"action": "List load script versions",
						"description": "Lists the saved versions of the load script of an app."
					},
					{
						"name": "Set",
						"value": "setLoadScript",
						"action": "Set load script",
						"description": "Replaces the load script of an app and keeps the previous script as a version."
					},
					{
						"name": "Validate",
						"value": "validateLoadScript",
						"action": "Validate load script",
						"description": "Checks a load script for basic errors such as unknown statements, without saving or running it; errors in the details of a statement are found only when the app is reloaded."
					}
				],
				"default": "getLoadScript"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						]
					}
				},
				"options": [
					{
						"name": "Create or Update Master Dimension",
						"value": "createOrUpdateDimension",
						"action": "Create or update master dimension",
						"description": "Creates a master dimension for a field, or updates the dimension when a dimension ID is given."
					},
					{
						"name": "Delete",
						"value": "deleteDimension",
						"action": "Delete master dimension",
						"description": "Deletes a master dimension."
					},
					{
						"name": "Get",
						"value": "getDimension",
						"action": "Get master dimension",
						"description": "Returns the properties of a master dimension."
					},
					{
						"name": "Get Many Values",
						"value": "listDimensionValues",
						"action": "List master dimension values",
						"description": "Lists the values of a master dimension, optionally with selections."
					},
					{
						"name": "Get Many",
						"value": "listDimensions",
						"action": "List master dimensions",
						"description": "Lists the master dimensions of an app."
					}
				],
				"default": "createOrUpdateDimension"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master measure"
						]
					}
				},
				"options": [
					{
						"name": "Create or Update Master Measure",
						"value": "createOrUpdateMeasure",
						"action": "Create or update master measure",
						"description": "Creates a master measure, or updates the measure when a measure ID is given."
					},
					{
						"name": "Delete",
						"value": "deleteMeasure",
						"action": "Delete master measure",
						"description": "Deletes a master measure."
					},
					{
						"name": "Get",
						"value": "getMeasure",
						"action": "Get master measure",
						"description": "Returns the properties of a master measure."
					},
					{
						"name": "Get Many",
						"value": "listMeasures",
						"action": "List master measures",
						"description": "Lists the master measures of an app with their expressions."
					}
				],
				"default": "createOrUpdateMeasure"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"object"
						]
					}
				},
				"options": [
					{
						"name": "Get Properties",
						"value": "getObjectProperties",
						"action": "Get object properties",
						"description": "Returns all properties of an object such as a chart, as the Qlik associative engine stores them."
					},
					{
						"name": "Get Many Master Visualizations",
						"value": "listMasterVisualizations",
						"action": "List master visualizations",
						"description": "Lists the master visualizations of an app."
					},
					{
						"name": "Get Many Stories",
						"value": "listStories",
						"action": "List stories",
						"description": "Lists the stories of an app."
					}
				],
				"default": "getObjectProperties"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						]
					}
				},
				"options": [
					{
						"name": "Cancel",
						"value": "cancelReload",
						"action": "Cancel reload",
						"description": "Cancels a reload that is queued or running."
					},
					{
						"name": "Get",
						"value": "getReload",
						"action": "Get reload",
						"description": "Returns a reload with its status, duration and log excerpt."
					},
					{
						"name": "Get Many",
						"value": "listReloads",
						"action": "List reloads",
						"description": "Lists the reloads of an app, newest first."
					},
					{
						"name": "Reload App",
						"value": "reloadApp",
						"action": "Reload app",
						"description": "Starts a reload of an app and returns the reload with its ID and status. If a full reload of the app is already waiting in the queue, that reload is returned, since it will load the latest data anyway. While another reload of the app is running, Qlik Cloud starts no new one; use Reload app and wait to wait for it."
					},
					{
						"name": "Reload App and Wait",
						"value": "reloadAppAndWait",
						"action": "Reload app and wait",
						"description": "Reloads an app and waits until the reload is finished; the result tells whether it succeeded. When the app is already reloading, the option If the app is already reloading decides what happens."
					},
					{
						"name": "Wait for Reloads",
						"value": "waitForReloads",
						"action": "Wait for reloads",
						"description": "Waits until the given reloads, for example started in parallel, are finished."
					}
				],
				"default": "cancelReload"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload log"
						]
					}
				},
				"options": [
					{
						"name": "Get",
						"value": "getReloadLog",
						"action": "Get reload log",
						"description": "Returns the complete log of a reload as text."
					},
					{
						"name": "Get Many",
						"value": "listReloadLogs",
						"action": "List reload logs",
						"description": "Lists the stored reload logs of an app."
					}
				],
				"default": "getReloadLog"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createReloadTask",
						"action": "Create reload task",
						"description": "Creates a reload schedule for an app."
					},
					{
						"name": "Delete",
						"value": "deleteReloadTask",
						"action": "Delete reload task",
						"description": "Deletes a reload schedule."
					},
					{
						"name": "Get",
						"value": "getReloadTask",
						"action": "Get reload task",
						"description": "Returns a reload schedule with its next run."
					},
					{
						"name": "Get Many Runs",
						"value": "listReloadTaskRuns",
						"action": "List reload task runs",
						"description": "Lists the runs of a reload task, newest first, with status and short log."
					},
					{
						"name": "Get Many",
						"value": "listReloadTasks",
						"action": "List reload tasks",
						"description": "Lists the reload schedules, optionally of one app, with their next run. Schedules made in the hub or with tools that use Qlik's older reload tasks API appear only after Qlik Cloud has moved them to its Scheduling Tasks API."
					},
					{
						"name": "Start",
						"value": "startReloadTask",
						"action": "Start reload task",
						"description": "Runs an enabled reload task now, outside its schedule."
					},
					{
						"name": "Update",
						"value": "updateReloadTask",
						"action": "Update reload task",
						"description": "Changes the schedule of a reload task; values left empty stay as they are."
					}
				],
				"default": "createReloadTask"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						]
					}
				},
				"options": [
					{
						"name": "Create from Template",
						"value": "createTemplateReport",
						"action": "Create report from template",
						"description": "Creates a report from a report template, for example Excel or PixelPerfect, in the format of the template or as PDF."
					},
					{
						"name": "Export Chart",
						"value": "exportChart",
						"action": "Export chart",
						"description": "Exports a chart as PNG image or PDF file, with optional selections."
					},
					{
						"name": "Export Chart Data",
						"value": "exportChartData",
						"action": "Export chart data",
						"description": "Exports the data of a table or chart as Excel file, with optional selections."
					},
					{
						"name": "Export Sheet",
						"value": "exportSheet",
						"action": "Export sheet",
						"description": "Exports a sheet as PDF or PowerPoint file, with optional selections."
					},
					{
						"name": "Get Many Templates",
						"value": "listReportTemplates",
						"action": "List report templates",
						"description": "Lists the report templates, for example Excel or PixelPerfect, optionally of one app."
					}
				],
				"default": "createTemplateReport"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report file"
						]
					}
				},
				"options": [
					{
						"name": "Download Report File",
						"value": "downloadAncoreShareFile",
						"action": "Download report file",
						"description": "Downloads one file of a finished report from its link; links are valid for 12 hours."
					},
					{
						"name": "Download Report Files",
						"value": "downloadAncoreShareFiles",
						"action": "Download report files",
						"description": "Downloads all files of a finished report at once, for example to attach them to one mail."
					}
				],
				"default": "downloadAncoreShareFile"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createScript",
						"action": "Create script",
						"description": "Creates an empty script in a space or the personal space."
					},
					{
						"name": "Delete",
						"value": "deleteScript",
						"action": "Delete script",
						"description": "Deletes a script."
					},
					{
						"name": "Get",
						"value": "getScript",
						"action": "Get script",
						"description": "Returns the current content of a script."
					},
					{
						"name": "Get Many",
						"value": "listScripts",
						"action": "List scripts",
						"description": "Lists the scripts, optionally filtered by name or space."
					},
					{
						"name": "Update",
						"value": "updateScript",
						"action": "Update script",
						"description": "Replaces the content of a script and keeps the previous content as a version."
					}
				],
				"default": "createScript"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						]
					}
				},
				"options": [
					{
						"name": "Delete",
						"value": "deleteSheet",
						"action": "Delete sheet",
						"description": "Deletes a sheet with its objects."
					},
					{
						"name": "Duplicate",
						"value": "duplicateSheet",
						"action": "Duplicate sheet",
						"description": "Copies a sheet with all its objects within the app."
					},
					{
						"name": "Get Many Objects",
						"value": "listSheetObjects",
						"action": "List sheet objects",
						"description": "Lists the charts and tables on a sheet."
					},
					{
						"name": "Get Many",
						"value": "listSheets",
						"action": "List sheets",
						"description": "Lists the sheets of an app with their publishing state."
					},
					{
						"name": "Publish",
						"value": "publishSheet",
						"action": "Publish sheet",
						"description": "Publishes a sheet so that other users of the app can see it."
					},
					{
						"name": "Unpublish",
						"value": "unpublishSheet",
						"action": "Unpublish sheet",
						"description": "Makes a published sheet private again."
					}
				],
				"default": "deleteSheet"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						]
					}
				},
				"options": [
					{
						"name": "Create or Update Space",
						"value": "createOrUpdateSpace",
						"action": "Create or update space",
						"description": "Creates a space, or updates the name and description of an existing space when a space ID is given."
					},
					{
						"name": "Delete",
						"value": "deleteSpace",
						"action": "Delete space",
						"description": "Deletes a space. The space must be empty."
					},
					{
						"name": "Get",
						"value": "getSpace",
						"action": "Get space",
						"description": "Returns a space with its settings."
					},
					{
						"name": "Get Many Types",
						"value": "listSpaceTypes",
						"action": "List space types",
						"description": "Lists the types of spaces available in the tenant."
					},
					{
						"name": "Get Many",
						"value": "listSpaces",
						"action": "List spaces",
						"description": "Lists the spaces the connected Qlik Cloud user can see."
					}
				],
				"default": "createOrUpdateSpace"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						]
					}
				},
				"options": [
					{
						"name": "Add",
						"value": "addSpaceMember",
						"action": "Add space member",
						"description": "Assigns a user or group to a space with the given roles."
					},
					{
						"name": "Add Roles",
						"value": "addSpaceMemberRoles",
						"action": "Add space member roles",
						"description": "Adds roles to a user or group in a space and keeps the existing roles; adds the member when needed."
					},
					{
						"name": "Get",
						"value": "getSpaceMember",
						"action": "Get space member",
						"description": "Returns one assignment of a user or group to a space."
					},
					{
						"name": "Get Many",
						"value": "listSpaceMembers",
						"action": "List space members",
						"description": "Lists the users and groups assigned to a space with their roles."
					},
					{
						"name": "Remove",
						"value": "removeSpaceMember",
						"action": "Remove space member",
						"description": "Removes a user or group from a space."
					},
					{
						"name": "Remove Roles",
						"value": "removeSpaceMemberRoles",
						"action": "Remove space member roles",
						"description": "Removes roles from a user or group in a space; without remaining roles the member is removed from the space."
					},
					{
						"name": "Set",
						"value": "setSpaceMember",
						"action": "Set space member",
						"description": "Gives a user or group exactly the given roles in a space and adds the member when needed."
					},
					{
						"name": "Update",
						"value": "updateSpaceMember",
						"action": "Update space member",
						"description": "Replaces the roles of a user or group in a space."
					}
				],
				"default": "addSpaceMember"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						]
					}
				},
				"options": [
					{
						"name": "Create",
						"value": "createSpaceShare",
						"action": "Create space share",
						"description": "Shares an item of a space with a user or group."
					},
					{
						"name": "Delete",
						"value": "deleteSpaceShare",
						"action": "Delete space share",
						"description": "Removes a share from a space."
					},
					{
						"name": "Get",
						"value": "getSpaceShare",
						"action": "Get space share",
						"description": "Returns one share of a space."
					},
					{
						"name": "Get Many",
						"value": "listSpaceShares",
						"action": "List space shares",
						"description": "Lists the items shared directly from a space."
					},
					{
						"name": "Update",
						"value": "updateSpaceShare",
						"action": "Update space share",
						"description": "Changes the roles of a share."
					}
				],
				"default": "createSpaceShare"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"tenant"
						]
					}
				},
				"options": [
					{
						"name": "Get",
						"value": "getTenant",
						"action": "Get tenant",
						"description": "Returns the name, hostnames and status of the tenant."
					}
				],
				"default": "getTenant"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						]
					}
				},
				"options": [
					{
						"name": "Get Report Usage",
						"value": "getAncoreShareReportUsage",
						"action": "Get report usage",
						"description": "Returns the number of report runs per month, of all runs by button and by External Execution, for the account or one app, report or Qlik user."
					},
					{
						"name": "Get Many Automated Report Runs",
						"value": "listAncoreShareAutomatedRuns",
						"action": "List automated report runs",
						"description": "Lists the report runs started through ancoreShare External Execution (not by the button) with result and error, to find failed automated runs."
					}
				],
				"default": "getAncoreShareReportUsage"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"user"
						]
					}
				},
				"options": [
					{
						"name": "Get Current User",
						"value": "getCurrentUser",
						"action": "Get current user",
						"description": "Returns the Qlik Cloud user ancoreMate is connected with."
					},
					{
						"name": "Get",
						"value": "getUser",
						"action": "Get user",
						"description": "Returns a user of the tenant."
					},
					{
						"name": "Get Many",
						"value": "listUsers",
						"action": "List users",
						"description": "Lists the users of the tenant. Use the filter to search, for example name co \"anna\"."
					}
				],
				"default": "getCurrentUser"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"variable"
						]
					}
				},
				"options": [
					{
						"name": "Create or Update Variable",
						"value": "createOrUpdateVariable",
						"action": "Create or update variable",
						"description": "Creates a variable or changes its definition."
					},
					{
						"name": "Delete",
						"value": "deleteVariable",
						"action": "Delete variable",
						"description": "Deletes a variable."
					},
					{
						"name": "Get",
						"value": "getVariable",
						"action": "Get variable",
						"description": "Returns a variable with its definition and current value."
					},
					{
						"name": "Get Many",
						"value": "listVariables",
						"action": "List variables",
						"description": "Lists the variables of an app with their definitions."
					}
				],
				"default": "createOrUpdateVariable"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"ancoreShare Report"
						]
					}
				},
				"options": [
					{
						"name": "Get Many",
						"value": "listAncoreShareReports",
						"action": "List ancoreShare reports",
						"description": "Lists the ancoreShare report buttons of an app with title, export type and tags."
					},
					{
						"name": "Run",
						"value": "runAncoreShareReport",
						"action": "Run ancoreShare report",
						"description": "Starts an ancoreShare report; ancoreShare queues it and sends the files to the targets of the report button, for example the ancoreMate event."
					}
				],
				"default": "listAncoreShareReports"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"connection"
						]
					}
				},
				"options": [
					{
						"name": "Get Qlik Connection",
						"value": "getQlikConnection",
						"action": "Get Qlik connection",
						"description": "Returns whether ancoreMate is connected to a Qlik Cloud tenant, and to which tenant and Qlik user."
					}
				],
				"default": "getQlikConnection"
			},
			{
				"displayName": "Operation",
				"name": "operation",
				"type": "options",
				"noDataExpression": true,
				"displayOptions": {
					"show": {
						"resource": [
							"request"
						]
					}
				},
				"options": [
					{
						"name": "Send Qlik Cloud Request",
						"value": "sendQlikCloudRequest",
						"action": "Send Qlik Cloud request",
						"description": "Calls any REST API of your Qlik Cloud tenant below /api/v1/ with the connected user's rights, for operations that have no action of their own."
					}
				],
				"default": "sendQlikCloudRequest"
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"changeAppOwner"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Owner ID",
				"name": "ownerId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The ID of the new owner.",
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"changeAppOwner"
						]
					}
				}
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"copyApp"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"copyApp"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name of the copy. Leave empty to keep the name."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description of the copy."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space for the copy. Leave empty for the same space."
					}
				]
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The name of the app.",
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"createApp"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"createApp"
						]
					}
				},
				"options": [
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description of the app."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space to create the app in. Leave empty for the personal space."
					}
				]
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The name of the script.",
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						],
						"operation": [
							"createScript"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						],
						"operation": [
							"createScript"
						]
					}
				},
				"options": [
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description of the app."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space to create the app in. Leave empty for the personal space."
					}
				]
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"deleteApp"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"deleteAppMediaFile"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Path",
				"name": "path",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"deleteAppMediaFile"
						]
					}
				},
				"description": "The path of the media file, for example logo.png or images/logo.png."
			},
			{
				"displayName": "Script ID",
				"name": "scriptId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListScriptsResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						],
						"operation": [
							"deleteScript"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app evaluation"
						],
						"operation": [
							"evaluateAppPerformance"
						]
					}
				},
				"description": "Guid of the app."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"exportApp"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Without data",
				"name": "withoutData",
				"type": "boolean",
				"default": false,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"exportApp"
						]
					}
				},
				"description": "Whether to export only the structure and the load script, without data."
			},
			{
				"displayName": "File name",
				"name": "fileName",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"exportApp"
						]
					}
				},
				"description": "The name of the file. Default is the name of the app and the time (UTC), for example Sales_2026-10-02_1015.qvf."
			},
			{
				"displayName": "Put Output File in Field",
				"name": "dataPropertyName",
				"type": "string",
				"default": "data",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"exportApp"
						]
					}
				},
				"hint": "The name of the output binary field to put the file in"
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"getApp"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"getAppDataLineage"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"getAppDataMetadata"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Evaluation ID",
				"name": "evaluationId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app evaluation"
						],
						"operation": [
							"getAppEvaluation"
						]
					}
				},
				"description": "Id of the desired evaluation."
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"app evaluation"
						],
						"operation": [
							"getAppEvaluation"
						]
					}
				},
				"options": [
					{
						"displayName": "All",
						"name": "all",
						"type": "boolean",
						"default": false,
						"description": "Whether to return the full data of the evaluation."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"getAppMediaFile"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Path",
				"name": "path",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"getAppMediaFile"
						]
					}
				},
				"description": "The path of the media file, for example logo.png. Not needed for the thumbnail."
			},
			{
				"displayName": "Thumbnail",
				"name": "thumbnail",
				"type": "boolean",
				"default": false,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"getAppMediaFile"
						]
					}
				},
				"description": "Whether to return the thumbnail of the app instead of a media file."
			},
			{
				"displayName": "Put Output File in Field",
				"name": "dataPropertyName",
				"type": "string",
				"default": "data",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"getAppMediaFile"
						]
					}
				},
				"hint": "The name of the output binary field to put the file in"
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesIdOptional"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"getApps"
						]
					}
				},
				"description": "Returns only the apps of this space; personal for your personal space. Leave empty for all apps."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"getApps"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"getApps"
						]
					}
				},
				"options": [
					{
						"displayName": "Search",
						"name": "search",
						"type": "string",
						"default": "",
						"description": "Returns only apps whose name contains this text."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 1000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of apps to return, between 1 and 1000."
					}
				]
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"getLoadScript"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"getLoadScriptVersion"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Version ID",
				"name": "versionId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"getLoadScriptVersion"
						]
					}
				},
				"description": "Identifier of the script version, or 'current' for retrieving the current version."
			},
			{
				"displayName": "Script ID",
				"name": "scriptId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListScriptsResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						],
						"operation": [
							"getScript"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"importApp"
						]
					}
				},
				"description": "The name of the new app. Default is the name stored in the file."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"importApp"
						]
					}
				},
				"description": "The space of the new app. Leave empty for the personal space."
			},
			{
				"displayName": "Input Binary Field",
				"name": "binaryPropertyName",
				"type": "string",
				"default": "data",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"importApp"
						]
					}
				},
				"hint": "The name of the input binary field containing the file to send",
				"description": "The QVF file."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app evaluation"
						],
						"operation": [
							"listAppEvaluations"
						]
					}
				},
				"description": "The app guid."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"app evaluation"
						],
						"operation": [
							"listAppEvaluations"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"app evaluation"
						],
						"operation": [
							"listAppEvaluations"
						]
					}
				},
				"options": [
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "string",
						"default": "",
						"description": "Property to sort list on."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"listAppMediaFiles"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Folder",
				"name": "folder",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"listAppMediaFiles"
						]
					}
				},
				"description": "A folder within the media library. Leave empty for all files."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"listAppMediaFiles"
						]
					}
				}
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"listLoadScriptVersions"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"listLoadScriptVersions"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"listLoadScriptVersions"
						]
					}
				},
				"options": [
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						],
						"operation": [
							"listScripts"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						],
						"operation": [
							"listScripts"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The case-insensitive string used to search for a resource by name."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "Any",
								"value": ""
							},
							{
								"name": "+createdAt",
								"value": "+createdAt"
							},
							{
								"name": "-createdAt",
								"value": "-createdAt"
							},
							{
								"name": "+name",
								"value": "+name"
							},
							{
								"name": "-name",
								"value": "-name"
							},
							{
								"name": "+updatedAt",
								"value": "+updatedAt"
							},
							{
								"name": "-updatedAt",
								"value": "-updatedAt"
							},
							{
								"name": "+recentlyUsed",
								"value": "+recentlyUsed"
							},
							{
								"name": "-recentlyUsed",
								"value": "-recentlyUsed"
							}
						],
						"default": "",
						"description": "The property of a resource to sort on (default sort is +createdAt)."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space's unique identifier (supports \\'personal\\' as spaceId)."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"moveAppToSpace"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The ID of the target space.",
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"moveAppToSpace"
						]
					}
				}
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"publishApp"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"publishApp"
						]
					}
				},
				"options": [
					{
						"displayName": "Data",
						"name": "data",
						"type": "options",
						"options": [
							{
								"name": "source",
								"value": "source"
							},
							{
								"name": "target",
								"value": "target"
							}
						],
						"default": "source",
						"description": "Which data the published app gets: source (the data of the source app, the default) or target (the published app keeps its current data, for Republish app)."
					},
					{
						"displayName": "Move App",
						"name": "moveApp",
						"type": "boolean",
						"default": false,
						"description": "Whether to move the original app instead of copying it."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The managed space ID where the app will be published."
					},
					{
						"displayName": "Attributes",
						"name": "attributes",
						"type": "json",
						"default": "{}",
						"description": "The attributes."
					},
					{
						"displayName": "Origin App ID",
						"name": "originAppId",
						"type": "string",
						"default": "",
						"description": "If app is moved, originAppId needs to be provided."
					}
				]
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"republishApp"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"republishApp"
						]
					}
				},
				"options": [
					{
						"displayName": "Data",
						"name": "data",
						"type": "options",
						"options": [
							{
								"name": "source",
								"value": "source"
							},
							{
								"name": "target",
								"value": "target"
							}
						],
						"default": "source",
						"description": "Which data the published app gets: source (the data of the source app, the default) or target (the published app keeps its current data, for Republish app)."
					},
					{
						"displayName": "Target ID",
						"name": "targetId",
						"type": "string",
						"default": "",
						"description": "The target ID to be republished."
					},
					{
						"displayName": "Attributes",
						"name": "attributes",
						"type": "json",
						"default": "{}",
						"description": "The attributes."
					},
					{
						"displayName": "Check Origin App ID",
						"name": "checkOriginAppId",
						"type": "boolean",
						"default": false,
						"description": "Whether to check that the source app is the app that was originally published."
					}
				]
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"setLoadScript"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Script",
				"name": "script",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The complete load script.",
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"setLoadScript"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"setLoadScript"
						]
					}
				},
				"options": [
					{
						"displayName": "Version message",
						"name": "versionMessage",
						"type": "string",
						"default": "",
						"description": "A description of this script version."
					}
				]
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"updateApp"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"app"
						],
						"operation": [
							"updateApp"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The new name of the app."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The new description of the app."
					}
				]
			},
			{
				"displayName": "Script ID",
				"name": "scriptId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListScriptsResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						],
						"operation": [
							"updateScript"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Script",
				"name": "script",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The complete script.",
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						],
						"operation": [
							"updateScript"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"script"
						],
						"operation": [
							"updateScript"
						]
					}
				},
				"options": [
					{
						"displayName": "Version message",
						"name": "versionMessage",
						"type": "string",
						"default": "",
						"description": "A description of this version."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadGetAppsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"uploadAppMediaFile"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Path",
				"name": "path",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"uploadAppMediaFile"
						]
					}
				},
				"description": "The path of the media file, for example logo.png or images/logo.png."
			},
			{
				"displayName": "Input Binary Field",
				"name": "binaryPropertyName",
				"type": "string",
				"default": "data",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"app media"
						],
						"operation": [
							"uploadAppMediaFile"
						]
					}
				},
				"hint": "The name of the input binary field containing the file to send",
				"description": "The file to upload."
			},
			{
				"displayName": "Script",
				"name": "script",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The load script to check.",
				"displayOptions": {
					"show": {
						"resource": [
							"load script"
						],
						"operation": [
							"validateLoadScript"
						]
					}
				}
			},
			{
				"displayName": "Method",
				"name": "method",
				"type": "options",
				"options": [
					{
						"name": "GET",
						"value": "GET"
					},
					{
						"name": "POST",
						"value": "POST"
					},
					{
						"name": "PUT",
						"value": "PUT"
					},
					{
						"name": "PATCH",
						"value": "PATCH"
					},
					{
						"name": "DELETE",
						"value": "DELETE"
					}
				],
				"default": "GET",
				"required": true,
				"description": "The HTTP method.",
				"displayOptions": {
					"show": {
						"resource": [
							"request"
						],
						"operation": [
							"sendQlikCloudRequest"
						]
					}
				}
			},
			{
				"displayName": "Path",
				"name": "path",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The path below /api/v1/, for example spaces or apps/1234/reloads/logs.",
				"displayOptions": {
					"show": {
						"resource": [
							"request"
						],
						"operation": [
							"sendQlikCloudRequest"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"request"
						],
						"operation": [
							"sendQlikCloudRequest"
						]
					}
				},
				"options": [
					{
						"displayName": "Query",
						"name": "query",
						"type": "string",
						"default": "",
						"description": "Query parameters as in a URL, for example limit=10&name=Sales."
					},
					{
						"displayName": "Body",
						"name": "body",
						"type": "json",
						"default": "{}",
						"description": "The JSON body for POST, PUT, PATCH and DELETE, for example the IDs of the items to delete."
					}
				]
			},
			{
				"displayName": "Reload ID",
				"name": "reloadId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"cancelReload"
						]
					}
				},
				"description": "The unique identifier of the reload."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The app to reload.",
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"createReloadTask"
						]
					}
				}
			},
			{
				"displayName": "Recurrence",
				"name": "recurrence",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The schedule as RRULE, for example FREQ=DAILY;BYHOUR=6;BYMINUTE=0 or FREQ=WEEKLY;BYDAY=MO,TH;BYHOUR=7;BYMINUTE=30.",
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"createReloadTask"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"createReloadTask"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "A name for the reload task; letters and digits are kept, a short suffix makes it unique."
					},
					{
						"displayName": "Time zone",
						"name": "timezone",
						"type": "string",
						"default": "",
						"description": "The time zone of the schedule, for example Europe/Berlin. Default UTC."
					},
					{
						"displayName": "Start",
						"name": "startDateTime",
						"type": "string",
						"default": "",
						"description": "The date and time from which the schedule applies, for example 2026-10-05T06:00:00. Default now."
					},
					{
						"displayName": "Partial",
						"name": "partial",
						"type": "boolean",
						"default": false,
						"description": "Whether to run a partial reload."
					},
					{
						"displayName": "Enabled",
						"name": "enabled",
						"type": "boolean",
						"default": false,
						"description": "Whether the schedule is active. Default yes."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description of the reload task."
					}
				]
			},
			{
				"displayName": "Reload task",
				"name": "taskId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListReloadTasksId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"deleteReloadTask"
						]
					}
				},
				"description": "The reload task."
			},
			{
				"displayName": "Reload ID",
				"name": "reloadId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"getReload"
						]
					}
				},
				"description": "The unique identifier of the reload."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload log"
						],
						"operation": [
							"getReloadLog"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Reload ID",
				"name": "reloadId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload log"
						],
						"operation": [
							"getReloadLog"
						]
					}
				},
				"description": "Identifier of the reload."
			},
			{
				"displayName": "Reload task",
				"name": "taskId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListReloadTasksId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"getReloadTask"
						]
					}
				},
				"description": "The reload task."
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload log"
						],
						"operation": [
							"listReloadLogs"
						]
					}
				},
				"description": "Identifier of the app."
			},
			{
				"displayName": "Reload task",
				"name": "taskId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListReloadTasksId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"listReloadTaskRuns"
						]
					}
				},
				"description": "The reload task."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"listReloadTaskRuns"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"listReloadTaskRuns"
						]
					}
				},
				"options": [
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"numberPrecision": 0
						},
						"default": 0,
						"description": "The maximum number of runs, between 1 and 100. Default 20."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceIdOptional"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"listReloadTasks"
						]
					}
				},
				"description": "Only the reload tasks of this app."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"listReloadTasks"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"listReloadTasks"
						]
					}
				},
				"options": [
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"numberPrecision": 0
						},
						"default": 0,
						"description": "The maximum number of reload tasks, between 1 and 5000. Default 100."
					}
				]
			},
			{
				"displayName": "App ID",
				"name": "appId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"listReloads"
						]
					}
				},
				"description": "The UUID formatted string used to search for an app's reload history entries."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"listReloads"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"listReloads"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "SCIM filter expression used to search for reloads."
					},
					{
						"displayName": "Partial",
						"name": "partial",
						"type": "boolean",
						"default": false,
						"description": "Whether to list partial reloads (on) or full reloads (off)."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "creationTime",
								"value": "creationTime"
							},
							{
								"name": "+creationTime",
								"value": "+creationTime"
							},
							{
								"name": "-creationTime",
								"value": "-creationTime"
							},
							{
								"name": "status",
								"value": "status"
							},
							{
								"name": "+status",
								"value": "+status"
							},
							{
								"name": "-status",
								"value": "-status"
							},
							{
								"name": "startTime",
								"value": "startTime"
							},
							{
								"name": "+startTime",
								"value": "+startTime"
							},
							{
								"name": "-startTime",
								"value": "-startTime"
							},
							{
								"name": "endTime",
								"value": "endTime"
							},
							{
								"name": "+endTime",
								"value": "+endTime"
							},
							{
								"name": "-endTime",
								"value": "-endTime"
							}
						],
						"default": "-creationTime",
						"description": "The field to sort by, with +/- prefix indicating sort order."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId",
					"loadOptionsDependsOn": []
				},
				"default": "",
				"required": true,
				"description": "The app to reload.",
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"reloadApp"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"reloadApp"
						]
					}
				},
				"options": [
					{
						"displayName": "Weight",
						"name": "weight",
						"type": "number",
						"default": 0,
						"description": "The weight of the reload for the same tenant."
					},
					{
						"displayName": "Partial",
						"name": "partial",
						"type": "boolean",
						"default": false,
						"description": "Whether the reload is a partial reload."
					},
					{
						"displayName": "Variables",
						"name": "variablesUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Reload app variable",
						"default": {},
						"options": [
							{
								"displayName": "Reload app variable",
								"name": "entries",
								"values": [
									{
										"displayName": "Variable",
										"name": "name",
										"type": "options",
										"typeOptions": {
											"loadOptionsMethod": "loadListReloadVariableChoicesName",
											"loadOptionsDependsOn": [
												"appId"
											]
										},
										"default": "",
										"description": "The variable of the app."
									},
									{
										"displayName": "Value",
										"name": "value",
										"type": "string",
										"default": "",
										"description": "The value for this reload, as text."
									}
								]
							}
						],
						"description": "Values for variables of the load script for this reload. Only variables the app has can be given, and the load script must not set them before it uses them."
					},
					{
						"displayName": "Variables (JSON)",
						"name": "variables",
						"type": "json",
						"default": "[]",
						"description": "Variables as JSON list, for example from a previous node; added to the variables above."
					},
					{
						"displayName": "Resource ID",
						"name": "resourceId",
						"type": "string",
						"default": "",
						"description": "The String field identifying the specific resource ID within that service."
					},
					{
						"displayName": "Resource Type",
						"name": "resourceType",
						"type": "options",
						"options": [
							{
								"name": "api",
								"value": "api"
							},
							{
								"name": "reload-tasks",
								"value": "reload-tasks"
							},
							{
								"name": "tasks",
								"value": "tasks"
							},
							{
								"name": "automate",
								"value": "automate"
							}
						],
						"default": "api",
						"description": "The String field identifying the service type that triggered the reload, e.g."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"reloadAppAndWait"
						]
					}
				},
				"description": "The app to reload."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"reloadAppAndWait"
						]
					}
				},
				"options": [
					{
						"displayName": "Partial",
						"name": "partial",
						"type": "boolean",
						"default": false,
						"description": "Whether to run a partial reload."
					},
					{
						"displayName": "Variables",
						"name": "variablesUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Reload variable",
						"default": {},
						"options": [
							{
								"displayName": "Reload variable",
								"name": "entries",
								"values": [
									{
										"displayName": "Variable",
										"name": "name",
										"type": "options",
										"typeOptions": {
											"loadOptionsMethod": "loadListReloadVariableChoicesName",
											"loadOptionsDependsOn": [
												"appId"
											]
										},
										"default": "",
										"description": "The variable of the app."
									},
									{
										"displayName": "Value",
										"name": "value",
										"type": "string",
										"default": "",
										"description": "The value for this reload, as text."
									}
								]
							}
						],
						"description": "Values for variables of the load script for this reload. Only variables the app has can be given, and the load script must not set them before it uses them."
					},
					{
						"displayName": "Variables (JSON)",
						"name": "variables",
						"type": "json",
						"default": "[]",
						"description": "Variables as JSON list, for example from a previous node; added to the variables above."
					},
					{
						"displayName": "Fail when the reload fails",
						"name": "failOnError",
						"type": "boolean",
						"default": false,
						"description": "Whether the action fails when a reload fails, with the error of the load script. Turn off to continue with the result (succeeded = false) instead. Default: on."
					},
					{
						"displayName": "If the app is already reloading",
						"name": "ifReloading",
						"type": "options",
						"options": [
							{
								"name": "Wait, then start a new reload",
								"value": "reload"
							},
							{
								"name": "Wait and use that reload",
								"value": "use"
							},
							{
								"name": "Fail",
								"value": "fail"
							}
						],
						"default": "reload",
						"description": "What happens when another reload of the app is running or waiting: wait for it and then start a new reload (the default, the result has the latest data), wait for it and return its result, or fail."
					}
				]
			},
			{
				"displayName": "Reload task",
				"name": "taskId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListReloadTasksId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"startReloadTask"
						]
					}
				},
				"description": "The reload task."
			},
			{
				"displayName": "Reload task",
				"name": "taskId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListReloadTasksId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"updateReloadTask"
						]
					}
				},
				"description": "The reload task."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"reload task"
						],
						"operation": [
							"updateReloadTask"
						]
					}
				},
				"options": [
					{
						"displayName": "Recurrence",
						"name": "recurrence",
						"type": "string",
						"default": "",
						"description": "The schedule as RRULE, for example FREQ=DAILY;BYHOUR=6;BYMINUTE=0 or FREQ=WEEKLY;BYDAY=MO,TH;BYHOUR=7;BYMINUTE=30."
					},
					{
						"displayName": "Time zone",
						"name": "timezone",
						"type": "string",
						"default": "",
						"description": "The time zone of the schedule, for example Europe/Berlin. Default UTC."
					},
					{
						"displayName": "Start",
						"name": "startDateTime",
						"type": "string",
						"default": "",
						"description": "The date and time from which the schedule applies, for example 2026-10-05T06:00:00. Default now."
					},
					{
						"displayName": "Partial",
						"name": "partial",
						"type": "boolean",
						"default": false,
						"description": "Whether to run a partial reload."
					},
					{
						"displayName": "Enabled",
						"name": "enabled",
						"type": "boolean",
						"default": false,
						"description": "Whether the schedule is active. Default yes."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description of the reload task."
					}
				]
			},
			{
				"displayName": "Reload IDs",
				"name": "reloadIds",
				"type": "string",
				"typeOptions": {
					"multipleValues": true,
					"multipleValueButtonText": "Add Reload ID"
				},
				"default": [],
				"required": true,
				"description": "The IDs of the reloads, at most 50. One value per field; an expression may also return a list.",
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"waitForReloads"
						]
					}
				}
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"waitForReloads"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"reload"
						],
						"operation": [
							"waitForReloads"
						]
					}
				},
				"options": [
					{
						"displayName": "Fail when the reload fails",
						"name": "failOnError",
						"type": "boolean",
						"default": false,
						"description": "Whether the action fails when one of the reloads fails, with the error of the load script. Turn off to continue with the result (succeeded = false) instead. Default: on."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"createBookmark"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Title",
				"name": "title",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The title of the bookmark.",
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"createBookmark"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"createBookmark"
						]
					}
				},
				"options": [
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description of the bookmark."
					},
					{
						"displayName": "Publish",
						"name": "publish",
						"type": "boolean",
						"default": false,
						"description": "Whether to publish the bookmark."
					},
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied before reading, for example Region with the values Europe and Asia."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied before the selections."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"createOrUpdateDimension"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Title",
				"name": "title",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The title of the master dimension.",
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"createOrUpdateDimension"
						]
					}
				}
			},
			{
				"displayName": "Field",
				"name": "field",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The field or an expression starting with =.",
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"createOrUpdateDimension"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"createOrUpdateDimension"
						]
					}
				},
				"options": [
					{
						"displayName": "Dimension ID",
						"name": "dimensionId",
						"type": "string",
						"default": "",
						"description": "The master dimension to update. Leave empty to create a new one."
					},
					{
						"displayName": "Label",
						"name": "label",
						"type": "string",
						"default": "",
						"description": "The label shown in charts."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "The tags. One value per field; an expression may also return a list."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master measure"
						],
						"operation": [
							"createOrUpdateMeasure"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Title",
				"name": "title",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The title of the master measure.",
				"displayOptions": {
					"show": {
						"resource": [
							"master measure"
						],
						"operation": [
							"createOrUpdateMeasure"
						]
					}
				}
			},
			{
				"displayName": "Expression",
				"name": "expression",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The expression, for example Sum(Sales).",
				"displayOptions": {
					"show": {
						"resource": [
							"master measure"
						],
						"operation": [
							"createOrUpdateMeasure"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"master measure"
						],
						"operation": [
							"createOrUpdateMeasure"
						]
					}
				},
				"options": [
					{
						"displayName": "Measure ID",
						"name": "measureId",
						"type": "string",
						"default": "",
						"description": "The master measure to update. Leave empty to create a new one."
					},
					{
						"displayName": "Label",
						"name": "label",
						"type": "string",
						"default": "",
						"description": "The label shown in charts."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "The tags. One value per field; an expression may also return a list."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"variable"
						],
						"operation": [
							"createOrUpdateVariable"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Variable name",
				"name": "variableName",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"variable"
						],
						"operation": [
							"createOrUpdateVariable"
						]
					}
				},
				"description": "The name of the variable."
			},
			{
				"displayName": "Definition",
				"name": "definition",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The definition, for example 2025 or =Max(Year).",
				"displayOptions": {
					"show": {
						"resource": [
							"variable"
						],
						"operation": [
							"createOrUpdateVariable"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"variable"
						],
						"operation": [
							"createOrUpdateVariable"
						]
					}
				},
				"options": [
					{
						"displayName": "Comment",
						"name": "comment",
						"type": "string",
						"default": "",
						"description": "The comment."
					}
				]
			},
			{
				"displayName": "Report template",
				"name": "templateId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListReportTemplatesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"createTemplateReport"
						]
					}
				},
				"description": "The report template."
			},
			{
				"displayName": "Put Output File in Field",
				"name": "dataPropertyName",
				"type": "string",
				"default": "data",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"createTemplateReport"
						]
					}
				},
				"hint": "The name of the output binary field to put the file in"
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"createTemplateReport"
						]
					}
				},
				"options": [
					{
						"displayName": "Format",
						"name": "format",
						"type": "options",
						"options": [
							{
								"name": "native",
								"value": "native"
							},
							{
								"name": "pdf",
								"value": "pdf"
							}
						],
						"default": "native",
						"description": "Native (default) for the format of the template, or pdf."
					},
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied to the report, for example Region with the value Europe."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied to the report, instead of selections."
					},
					{
						"displayName": "File name",
						"name": "fileName",
						"type": "string",
						"default": "",
						"description": "The name of the file, for example Sales.pdf. Default is the title and the time (UTC), for example Customers_2026-10-02_1015.pdf."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"deleteBookmark"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Bookmark",
				"name": "bookmarkId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListBookmarksId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"deleteBookmark"
						]
					}
				},
				"description": "The bookmark."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"deleteDimension"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Master dimension",
				"name": "dimensionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDimensionsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"deleteDimension"
						]
					}
				},
				"description": "The master dimension."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master measure"
						],
						"operation": [
							"deleteMeasure"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Master measure",
				"name": "measureId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListMeasuresId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master measure"
						],
						"operation": [
							"deleteMeasure"
						]
					}
				},
				"description": "The master measure."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"deleteSheet"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Sheet",
				"name": "sheetId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSheetsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"deleteSheet"
						]
					}
				},
				"description": "The sheet."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"variable"
						],
						"operation": [
							"deleteVariable"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Variable",
				"name": "variableName",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListVariablesName",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"variable"
						],
						"operation": [
							"deleteVariable"
						]
					}
				},
				"description": "The name of the variable."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"duplicateSheet"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Sheet",
				"name": "sheetId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSheetsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"duplicateSheet"
						]
					}
				},
				"description": "The sheet."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"duplicateSheet"
						]
					}
				},
				"options": [
					{
						"displayName": "Title",
						"name": "title",
						"type": "string",
						"default": "",
						"description": "The title of the copy. Default is the title with (copy)."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						],
						"operation": [
							"evaluateExpression"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Expression",
				"name": "expression",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The expression, for example Sum(Sales).",
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						],
						"operation": [
							"evaluateExpression"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						],
						"operation": [
							"evaluateExpression"
						]
					}
				},
				"options": [
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied before reading, for example Region with the values Europe and Asia."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied before the selections."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"exportChart"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Object",
				"name": "objectId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataObjectsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"exportChart"
						]
					}
				},
				"description": "The table or chart object."
			},
			{
				"displayName": "Put Output File in Field",
				"name": "dataPropertyName",
				"type": "string",
				"default": "data",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"exportChart"
						]
					}
				},
				"hint": "The name of the output binary field to put the file in"
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"exportChart"
						]
					}
				},
				"options": [
					{
						"displayName": "Format",
						"name": "format",
						"type": "options",
						"options": [
							{
								"name": "png",
								"value": "png"
							},
							{
								"name": "pdf",
								"value": "pdf"
							}
						],
						"default": "png",
						"description": "The file format, png (default) or pdf."
					},
					{
						"displayName": "Width",
						"name": "width",
						"type": "number",
						"default": 0,
						"description": "The width in pixels, between 20 and 4000. Default 1280."
					},
					{
						"displayName": "Height",
						"name": "height",
						"type": "number",
						"default": 0,
						"description": "The height in pixels, between 20 and 4000. Default 720."
					},
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied to the report, for example Region with the value Europe."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied to the report, instead of selections."
					},
					{
						"displayName": "File name",
						"name": "fileName",
						"type": "string",
						"default": "",
						"description": "The name of the file, for example Sales.pdf. Default is the title and the time (UTC), for example Customers_2026-10-02_1015.pdf."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"exportChartData"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Object",
				"name": "objectId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataObjectsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"exportChartData"
						]
					}
				},
				"description": "The table or chart object."
			},
			{
				"displayName": "Put Output File in Field",
				"name": "dataPropertyName",
				"type": "string",
				"default": "data",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"exportChartData"
						]
					}
				},
				"hint": "The name of the output binary field to put the file in"
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"exportChartData"
						]
					}
				},
				"options": [
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied to the report, for example Region with the value Europe."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied to the report, instead of selections."
					},
					{
						"displayName": "File name",
						"name": "fileName",
						"type": "string",
						"default": "",
						"description": "The name of the file, for example Sales.pdf. Default is the title and the time (UTC), for example Customers_2026-10-02_1015.pdf."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"exportSheet"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Sheet",
				"name": "sheetId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSheetsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"exportSheet"
						]
					}
				},
				"description": "The sheet."
			},
			{
				"displayName": "Put Output File in Field",
				"name": "dataPropertyName",
				"type": "string",
				"default": "data",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"exportSheet"
						]
					}
				},
				"hint": "The name of the output binary field to put the file in"
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"exportSheet"
						]
					}
				},
				"options": [
					{
						"displayName": "Format",
						"name": "format",
						"type": "options",
						"options": [
							{
								"name": "pdf",
								"value": "pdf"
							},
							{
								"name": "pptx",
								"value": "pptx"
							}
						],
						"default": "pdf",
						"description": "The file format, pdf (default) or pptx."
					},
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied to the report, for example Region with the value Europe."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied to the report, instead of selections."
					},
					{
						"displayName": "File name",
						"name": "fileName",
						"type": "string",
						"default": "",
						"description": "The name of the file, for example Sales.pdf. Default is the title and the time (UTC), for example Customers_2026-10-02_1015.pdf."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"field"
						],
						"operation": [
							"getAppFields"
						]
					}
				},
				"description": "The app whose fields are listed."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"field"
						],
						"operation": [
							"getAppFields"
						]
					}
				}
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"getDimension"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Master dimension",
				"name": "dimensionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDimensionsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"getDimension"
						]
					}
				},
				"description": "The master dimension."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master measure"
						],
						"operation": [
							"getMeasure"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Master measure",
				"name": "measureId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListMeasuresId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master measure"
						],
						"operation": [
							"getMeasure"
						]
					}
				},
				"description": "The master measure."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						],
						"operation": [
							"getMeasureValue"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Master measure",
				"name": "measureId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListMeasuresId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						],
						"operation": [
							"getMeasureValue"
						]
					}
				},
				"description": "The master measure."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						],
						"operation": [
							"getMeasureValue"
						]
					}
				},
				"options": [
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied before reading, for example Region with the values Europe and Asia."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied before the selections."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"object"
						],
						"operation": [
							"getObjectProperties"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Object ID",
				"name": "objectId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"object"
						],
						"operation": [
							"getObjectProperties"
						]
					}
				},
				"description": "The ID of the object, for example from List sheet objects."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						],
						"operation": [
							"getTableData"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Object",
				"name": "objectId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataObjectsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						],
						"operation": [
							"getTableData"
						]
					}
				},
				"description": "The table or chart object."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						],
						"operation": [
							"getTableData"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						],
						"operation": [
							"getTableData"
						]
					}
				},
				"options": [
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"default": 0,
						"description": "The maximum number of rows or values to return, between 1 and 100000. Default 1000."
					},
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied before reading, for example Region with the values Europe and Asia."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied before the selections."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						],
						"operation": [
							"getTableDataForFields"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						],
						"operation": [
							"getTableDataForFields"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data"
						],
						"operation": [
							"getTableDataForFields"
						]
					}
				},
				"options": [
					{
						"displayName": "Dimensions",
						"name": "dimensions",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Dimension"
						},
						"default": [],
						"description": "Fields or expressions starting with = for the rows, for example Region. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Measures",
						"name": "measures",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Measure"
						},
						"default": [],
						"description": "Expressions for the values, for example Sum(Sales). One value per field; an expression may also return a list."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"default": 0,
						"description": "The maximum number of rows or values to return, between 1 and 100000. Default 1000."
					},
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied before reading, for example Region with the values Europe and Asia."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied before the selections."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"variable"
						],
						"operation": [
							"getVariable"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Variable",
				"name": "variableName",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListVariablesName",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"variable"
						],
						"operation": [
							"getVariable"
						]
					}
				},
				"description": "The name of the variable."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"listBookmarks"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"listBookmarks"
						]
					}
				}
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"listDimensionValues"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Master dimension",
				"name": "dimensionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDimensionsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"listDimensionValues"
						]
					}
				},
				"description": "The master dimension."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"listDimensionValues"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"listDimensionValues"
						]
					}
				},
				"options": [
					{
						"displayName": "Search",
						"name": "search",
						"type": "string",
						"default": "",
						"description": "Returns only values matching the search."
					},
					{
						"displayName": "Only possible values",
						"name": "onlyPossible",
						"type": "boolean",
						"default": false,
						"description": "Whether to return only the values that are possible with the current selections."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"default": 0,
						"description": "The maximum number of rows or values to return, between 1 and 100000. Default 1000."
					},
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied before reading, for example Region with the values Europe and Asia."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied before the selections."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"listDimensions"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"master dimension"
						],
						"operation": [
							"listDimensions"
						]
					}
				}
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"field"
						],
						"operation": [
							"listFieldValues"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Field",
				"name": "field",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The name of the field.",
				"displayOptions": {
					"show": {
						"resource": [
							"field"
						],
						"operation": [
							"listFieldValues"
						]
					}
				}
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"field"
						],
						"operation": [
							"listFieldValues"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"field"
						],
						"operation": [
							"listFieldValues"
						]
					}
				},
				"options": [
					{
						"displayName": "Search",
						"name": "search",
						"type": "string",
						"default": "",
						"description": "Returns only values matching the search, for example Eu*."
					},
					{
						"displayName": "Only possible values",
						"name": "onlyPossible",
						"type": "boolean",
						"default": false,
						"description": "Whether to return only the values that are possible with the current selections."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"default": 0,
						"description": "The maximum number of rows or values to return, between 1 and 100000. Default 1000."
					},
					{
						"displayName": "Selections",
						"name": "selectionsUi",
						"type": "fixedCollection",
						"typeOptions": {
							"multipleValues": true
						},
						"placeholder": "Add Selection",
						"default": {},
						"options": [
							{
								"displayName": "Selection",
								"name": "entries",
								"values": [
									{
										"displayName": "Field",
										"name": "field",
										"type": "string",
										"default": "",
										"description": "The name of the field."
									},
									{
										"displayName": "Values",
										"name": "values",
										"type": "string",
										"typeOptions": {
											"multipleValues": true,
											"multipleValueButtonText": "Add Value"
										},
										"default": [],
										"description": "The values to select. One value per field."
									},
									{
										"displayName": "Search",
										"name": "search",
										"type": "string",
										"default": "",
										"description": "A search instead of values, for example A* or >1000."
									}
								]
							}
						],
						"description": "Field selections applied before reading, for example Region with the values Europe and Asia."
					},
					{
						"displayName": "Selections (JSON)",
						"name": "selections",
						"type": "json",
						"default": "[]",
						"description": "Selections as JSON list, for example from a previous node; added to the selections above."
					},
					{
						"displayName": "Bookmark ID",
						"name": "bookmarkId",
						"type": "string",
						"default": "",
						"description": "A bookmark applied before the selections."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"object"
						],
						"operation": [
							"listMasterVisualizations"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"object"
						],
						"operation": [
							"listMasterVisualizations"
						]
					}
				}
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"master measure"
						],
						"operation": [
							"listMeasures"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"master measure"
						],
						"operation": [
							"listMeasures"
						]
					}
				}
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"listReportTemplates"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"report"
						],
						"operation": [
							"listReportTemplates"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "Template name to search and filter for."
					},
					{
						"displayName": "Source App ID",
						"name": "sourceAppId",
						"type": "string",
						"default": "",
						"description": "Return the templates that are using the specified app as data source."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"listSheetObjects"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Sheet",
				"name": "sheetId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSheetsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"listSheetObjects"
						]
					}
				},
				"description": "The sheet."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"listSheetObjects"
						]
					}
				}
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"listSheets"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"listSheets"
						]
					}
				}
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"object"
						],
						"operation": [
							"listStories"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"object"
						],
						"operation": [
							"listStories"
						]
					}
				}
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"variable"
						],
						"operation": [
							"listVariables"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"variable"
						],
						"operation": [
							"listVariables"
						]
					}
				}
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"publishBookmark"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Bookmark",
				"name": "bookmarkId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListBookmarksId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"publishBookmark"
						]
					}
				},
				"description": "The bookmark."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"publishSheet"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Sheet",
				"name": "sheetId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSheetsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"publishSheet"
						]
					}
				},
				"description": "The sheet."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"field"
						],
						"operation": [
							"setAlwaysOneSelectedValue"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Field",
				"name": "field",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The name of the field.",
				"displayOptions": {
					"show": {
						"resource": [
							"field"
						],
						"operation": [
							"setAlwaysOneSelectedValue"
						]
					}
				}
			},
			{
				"displayName": "Enabled",
				"name": "enabled",
				"type": "boolean",
				"default": false,
				"required": true,
				"description": "Whether exactly one value is always selected.",
				"displayOptions": {
					"show": {
						"resource": [
							"field"
						],
						"operation": [
							"setAlwaysOneSelectedValue"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"field"
						],
						"operation": [
							"setAlwaysOneSelectedValue"
						]
					}
				},
				"options": [
					{
						"displayName": "Value",
						"name": "value",
						"type": "string",
						"default": "",
						"description": "The value to select when the setting is switched on. Default is the first value."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"unpublishBookmark"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Bookmark",
				"name": "bookmarkId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListBookmarksId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"unpublishBookmark"
						]
					}
				},
				"description": "The bookmark."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"unpublishSheet"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Sheet",
				"name": "sheetId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSheetsId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"sheet"
						],
						"operation": [
							"unpublishSheet"
						]
					}
				},
				"description": "The sheet."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"updateBookmark"
						]
					}
				},
				"description": "The app."
			},
			{
				"displayName": "Bookmark",
				"name": "bookmarkId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListBookmarksId",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"updateBookmark"
						]
					}
				},
				"description": "The bookmark."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"bookmark"
						],
						"operation": [
							"updateBookmark"
						]
					}
				},
				"options": [
					{
						"displayName": "Title",
						"name": "title",
						"type": "string",
						"default": "",
						"description": "The new title."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The new description."
					}
				]
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"addSpaceMember"
						]
					}
				},
				"description": "The ID of the space of the assignment."
			},
			{
				"displayName": "Type",
				"name": "type",
				"type": "options",
				"options": [
					{
						"name": "user",
						"value": "user"
					},
					{
						"name": "group",
						"value": "group"
					},
					{
						"name": "bot",
						"value": "bot"
					}
				],
				"default": "user",
				"required": true,
				"description": "The type of assignment such as user or group.",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"addSpaceMember"
						]
					}
				}
			},
			{
				"displayName": "Roles",
				"name": "roles",
				"type": "string",
				"typeOptions": {
					"multipleValues": true,
					"multipleValueButtonText": "Add Role"
				},
				"default": [],
				"required": true,
				"description": "The roles assigned to the assigneeId. One value per field; an expression may also return a list.",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"addSpaceMember"
						]
					}
				}
			},
			{
				"displayName": "Assignee ID",
				"name": "assigneeId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The userId or groupId based on the type.",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"addSpaceMember"
						]
					}
				}
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"addSpaceMemberRoles"
						]
					}
				},
				"description": "The space."
			},
			{
				"displayName": "User or group ID",
				"name": "assigneeId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The ID of the user or group.",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"addSpaceMemberRoles"
						]
					}
				}
			},
			{
				"displayName": "Roles",
				"name": "roles",
				"type": "string",
				"typeOptions": {
					"multipleValues": true,
					"multipleValueButtonText": "Add Role"
				},
				"default": [],
				"required": true,
				"description": "The roles to add, for example consumer or producer. One value per field; an expression may also return a list.",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"addSpaceMemberRoles"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"addSpaceMemberRoles"
						]
					}
				},
				"options": [
					{
						"displayName": "Type",
						"name": "type",
						"type": "options",
						"options": [
							{
								"name": "user",
								"value": "user"
							},
							{
								"name": "group",
								"value": "group"
							}
						],
						"default": "user",
						"description": "Whether the member is a user (default) or a group."
					}
				]
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The name of the space.",
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						],
						"operation": [
							"createOrUpdateSpace"
						]
					}
				}
			},
			{
				"displayName": "Type",
				"name": "type",
				"type": "options",
				"options": [
					{
						"name": "shared",
						"value": "shared"
					},
					{
						"name": "managed",
						"value": "managed"
					},
					{
						"name": "data",
						"value": "data"
					}
				],
				"default": "shared",
				"required": true,
				"description": "The type of space such as shared, managed, and so on.",
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						],
						"operation": [
							"createOrUpdateSpace"
						]
					}
				}
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesIdOptional"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						],
						"operation": [
							"createOrUpdateSpace"
						]
					}
				},
				"description": "The space to update. Leave empty to create a new space."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						],
						"operation": [
							"createOrUpdateSpace"
						]
					}
				},
				"options": [
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description of the space."
					}
				]
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"createSpaceShare"
						]
					}
				},
				"description": "The ID of the space of the share."
			},
			{
				"displayName": "Type",
				"name": "type",
				"type": "options",
				"options": [
					{
						"name": "user",
						"value": "user"
					},
					{
						"name": "group",
						"value": "group"
					},
					{
						"name": "link",
						"value": "link"
					}
				],
				"default": "user",
				"required": true,
				"description": "The type.",
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"createSpaceShare"
						]
					}
				}
			},
			{
				"displayName": "Roles",
				"name": "roles",
				"type": "string",
				"typeOptions": {
					"multipleValues": true,
					"multipleValueButtonText": "Add Role"
				},
				"default": [],
				"required": true,
				"description": "The roles assigned to the assigneeId. One value per field; an expression may also return a list.",
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"createSpaceShare"
						]
					}
				}
			},
			{
				"displayName": "Assignee ID",
				"name": "assigneeId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The userId or groupId based on the type.",
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"createSpaceShare"
						]
					}
				}
			},
			{
				"displayName": "Resource ID",
				"name": "resourceId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The resource id for the shared item.",
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"createSpaceShare"
						]
					}
				}
			},
			{
				"displayName": "Resource Type",
				"name": "resourceType",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The resource type for the shared item.",
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"createSpaceShare"
						]
					}
				}
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						],
						"operation": [
							"deleteSpace"
						]
					}
				},
				"description": "The ID of the space to delete."
			},
			{
				"displayName": "Share ID",
				"name": "shareId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"deleteSpaceShare"
						]
					}
				},
				"description": "The ID of the share to delete."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"deleteSpaceShare"
						]
					}
				},
				"description": "The ID of the space to which the share belongs."
			},
			{
				"displayName": "Group ID",
				"name": "groupId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGroupsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"group"
						],
						"operation": [
							"getGroup"
						]
					}
				},
				"description": "The group's unique identifier."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						],
						"operation": [
							"getSpace"
						]
					}
				},
				"description": "The ID of the space to retrieve."
			},
			{
				"displayName": "Assignment ID",
				"name": "assignmentId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"getSpaceMember"
						]
					}
				},
				"description": "The ID of the assignment to retrieve."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"getSpaceMember"
						]
					}
				},
				"description": "The ID of the space of the assignment."
			},
			{
				"displayName": "Share ID",
				"name": "shareId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"getSpaceShare"
						]
					}
				},
				"description": "The ID of the share to retrieve."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"getSpaceShare"
						]
					}
				},
				"description": "The ID of the space to which the share belongs."
			},
			{
				"displayName": "User ID",
				"name": "userId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListUsersId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"user"
						],
						"operation": [
							"getUser"
						]
					}
				},
				"description": "The user's unique identifier."
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"user"
						],
						"operation": [
							"getUser"
						]
					}
				},
				"options": [
					{
						"displayName": "Fields",
						"name": "fields",
						"type": "string",
						"default": "",
						"description": "A comma-delimited string of the requested fields per entity."
					}
				]
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"group"
						],
						"operation": [
							"listGroups"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"group"
						],
						"operation": [
							"listGroups"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "The advanced filtering to use for the query."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "string",
						"default": "",
						"description": "Optional resource field name to sort on, eg."
					},
					{
						"displayName": "System Groups",
						"name": "systemGroups",
						"type": "boolean",
						"default": false,
						"description": "Whether to return system groups such as Everyone instead of regular groups."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"listSpaceMembers"
						]
					}
				},
				"description": "The ID of the space of the assignment."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"listSpaceMembers"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"listSpaceMembers"
						]
					}
				},
				"options": [
					{
						"displayName": "Assignee ID",
						"name": "assigneeId",
						"type": "string",
						"default": "",
						"description": "Filters assignment for a specific assigneeid."
					},
					{
						"displayName": "Type",
						"name": "type",
						"type": "options",
						"options": [
							{
								"name": "Any",
								"value": ""
							},
							{
								"name": "user",
								"value": "user"
							},
							{
								"name": "group",
								"value": "group"
							},
							{
								"name": "bot",
								"value": "bot"
							}
						],
						"default": "",
						"description": "The type of assignment."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"listSpaceShares"
						]
					}
				},
				"description": "The ID of the space containing the shares."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"listSpaceShares"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"listSpaceShares"
						]
					}
				},
				"options": [
					{
						"displayName": "Group ID",
						"name": "groupId",
						"type": "string",
						"default": "",
						"description": "The ID of the group to which the resource is shared."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name of the shared resource."
					},
					{
						"displayName": "Resource ID",
						"name": "resourceId",
						"type": "string",
						"default": "",
						"description": "The ID of the shared resource."
					},
					{
						"displayName": "Resource Type",
						"name": "resourceType",
						"type": "string",
						"default": "",
						"description": "The type of the shared resource."
					},
					{
						"displayName": "Type",
						"name": "type",
						"type": "options",
						"options": [
							{
								"name": "Any",
								"value": ""
							},
							{
								"name": "user",
								"value": "user"
							},
							{
								"name": "group",
								"value": "group"
							},
							{
								"name": "link",
								"value": "link"
							}
						],
						"default": "",
						"description": "The type of share."
					},
					{
						"displayName": "User ID",
						"name": "userId",
						"type": "string",
						"default": "",
						"description": "The ID of the user to which the resource is shared."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						],
						"operation": [
							"listSpaceTypes"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						],
						"operation": [
							"listSpaceTypes"
						]
					}
				},
				"options": [
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						],
						"operation": [
							"listSpaces"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"space"
						],
						"operation": [
							"listSpaces"
						]
					}
				},
				"options": [
					{
						"displayName": "Action",
						"name": "action",
						"type": "string",
						"default": "",
						"description": "Action on space."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "Space name to search and filter for."
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "Space ownerId to filter by."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "string",
						"default": "",
						"description": "Field to sort by."
					},
					{
						"displayName": "Type",
						"name": "type",
						"type": "string",
						"default": "",
						"description": "Type(s) of space to filter."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"user"
						],
						"operation": [
							"listUsers"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"user"
						],
						"operation": [
							"listUsers"
						]
					}
				},
				"options": [
					{
						"displayName": "Fields",
						"name": "fields",
						"type": "string",
						"default": "",
						"description": "A comma-delimited string of the requested fields per entity."
					},
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "The advanced filtering to use for the query."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "name",
								"value": "name"
							},
							{
								"name": "+name",
								"value": "+name"
							},
							{
								"name": "-name",
								"value": "-name"
							},
							{
								"name": "_id",
								"value": "_id"
							},
							{
								"name": "+_id",
								"value": "+_id"
							},
							{
								"name": "-_id",
								"value": "-_id"
							},
							{
								"name": "id",
								"value": "id"
							},
							{
								"name": "+id",
								"value": "+id"
							},
							{
								"name": "-id",
								"value": "-id"
							},
							{
								"name": "tenantId",
								"value": "tenantId"
							},
							{
								"name": "+tenantId",
								"value": "+tenantId"
							},
							{
								"name": "-tenantId",
								"value": "-tenantId"
							},
							{
								"name": "clientId",
								"value": "clientId"
							},
							{
								"name": "+clientId",
								"value": "+clientId"
							},
							{
								"name": "-clientId",
								"value": "-clientId"
							},
							{
								"name": "status",
								"value": "status"
							},
							{
								"name": "+status",
								"value": "+status"
							},
							{
								"name": "-status",
								"value": "-status"
							},
							{
								"name": "subject",
								"value": "subject"
							},
							{
								"name": "+subject",
								"value": "+subject"
							},
							{
								"name": "-subject",
								"value": "-subject"
							},
							{
								"name": "email",
								"value": "email"
							},
							{
								"name": "+email",
								"value": "+email"
							},
							{
								"name": "-email",
								"value": "-email"
							},
							{
								"name": "inviteExpiry",
								"value": "inviteExpiry"
							},
							{
								"name": "+inviteExpiry",
								"value": "+inviteExpiry"
							},
							{
								"name": "-inviteExpiry",
								"value": "-inviteExpiry"
							},
							{
								"name": "createdAt",
								"value": "createdAt"
							},
							{
								"name": "+createdAt",
								"value": "+createdAt"
							},
							{
								"name": "-createdAt",
								"value": "-createdAt"
							}
						],
						"default": "+name",
						"description": "The field to sort by, with +/- prefix indicating sort order."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Assignment ID",
				"name": "assignmentId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"removeSpaceMember"
						]
					}
				},
				"description": "The ID of the assignment to delete."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"removeSpaceMember"
						]
					}
				},
				"description": "The ID of the space of the assignment."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"removeSpaceMemberRoles"
						]
					}
				},
				"description": "The space."
			},
			{
				"displayName": "User or group ID",
				"name": "assigneeId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The ID of the user or group.",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"removeSpaceMemberRoles"
						]
					}
				}
			},
			{
				"displayName": "Roles",
				"name": "roles",
				"type": "string",
				"typeOptions": {
					"multipleValues": true,
					"multipleValueButtonText": "Add Role"
				},
				"default": [],
				"required": true,
				"description": "The roles to remove, for example producer. One value per field; an expression may also return a list.",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"removeSpaceMemberRoles"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"removeSpaceMemberRoles"
						]
					}
				},
				"options": [
					{
						"displayName": "Type",
						"name": "type",
						"type": "options",
						"options": [
							{
								"name": "user",
								"value": "user"
							},
							{
								"name": "group",
								"value": "group"
							}
						],
						"default": "user",
						"description": "Whether the member is a user (default) or a group."
					}
				]
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"setSpaceMember"
						]
					}
				},
				"description": "The space."
			},
			{
				"displayName": "User or group ID",
				"name": "assigneeId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The ID of the user or group.",
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"setSpaceMember"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"setSpaceMember"
						]
					}
				},
				"options": [
					{
						"displayName": "Type",
						"name": "type",
						"type": "options",
						"options": [
							{
								"name": "user",
								"value": "user"
							},
							{
								"name": "group",
								"value": "group"
							}
						],
						"default": "user",
						"description": "Whether the member is a user (default) or a group."
					},
					{
						"displayName": "Roles",
						"name": "roles",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Role"
						},
						"default": [],
						"description": "The roles, for example consumer, contributor, producer or facilitator. Without roles the member is removed. One value per field; an expression may also return a list."
					}
				]
			},
			{
				"displayName": "Assignment ID",
				"name": "assignmentId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"updateSpaceMember"
						]
					}
				},
				"description": "The ID of the assignment to update."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"updateSpaceMember"
						]
					}
				},
				"description": "The ID of the space of the assignment."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"space member"
						],
						"operation": [
							"updateSpaceMember"
						]
					}
				},
				"options": [
					{
						"displayName": "Roles",
						"name": "roles",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Role"
						},
						"default": [],
						"description": "The roles assigned to the assigneeId. One value per field; an expression may also return a list."
					}
				]
			},
			{
				"displayName": "Share ID",
				"name": "shareId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"updateSpaceShare"
						]
					}
				},
				"description": "The ID of the share to update."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpacesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"updateSpaceShare"
						]
					}
				},
				"description": "The ID of the space to which the share belongs."
			},
			{
				"displayName": "Roles",
				"name": "roles",
				"type": "string",
				"typeOptions": {
					"multipleValues": true,
					"multipleValueButtonText": "Add Role"
				},
				"default": [],
				"required": true,
				"description": "The roles the share grants, for example consumer. One value per field; an expression may also return a list.",
				"displayOptions": {
					"show": {
						"resource": [
							"space share"
						],
						"operation": [
							"updateSpaceShare"
						]
					}
				}
			},
			{
				"displayName": "ID",
				"name": "id",
				"type": "string",
				"default": "",
				"required": true,
				"description": "ID of the source connection being duplicated.",
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"copyDataConnection"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"copyDataConnection"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "Optional name for the duplicated connection, must be unique in the target scope."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "Optional target space ID for the duplicated connection."
					},
					{
						"displayName": "Q Password",
						"name": "qPassword",
						"type": "string",
						"default": "",
						"description": "Optional credential password, specify to override credential embedded (or associated) with the source connection."
					},
					{
						"displayName": "Q Username",
						"name": "qUsername",
						"type": "string",
						"default": "",
						"description": "Optional credential username, specify to override credential embedded (or associated) with the source connection."
					}
				]
			},
			{
				"displayName": "Data file",
				"name": "dataFileId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataFilesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"copyDataFile"
						]
					}
				},
				"description": "The data file."
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"copyDataFile"
						]
					}
				},
				"description": "The name of the copy, for example sales-2025.csv."
			},
			{
				"displayName": "Space",
				"name": "dataFileConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataFileConnectionsIdOptional"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"copyDataFile"
						]
					}
				},
				"description": "The data file connection of the space. Leave empty for the personal space."
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"copyDataFile"
						]
					}
				},
				"options": [
					{
						"displayName": "Folder ID",
						"name": "folderId",
						"type": "string",
						"default": "",
						"description": "The ID of the folder, for example from Create data folder."
					}
				]
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"createDataConnection"
						]
					}
				},
				"options": [
					{
						"displayName": "Q ID",
						"name": "qID",
						"type": "string",
						"default": "",
						"description": "Unique identifier (UUID) for the data connection."
					},
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "List of tags attached to the connection (allow max 31 tags). One value per field; an expression may also return a list."
					},
					{
						"displayName": "Owner",
						"name": "owner",
						"type": "string",
						"default": "",
						"description": "App ID."
					},
					{
						"displayName": "Q Name",
						"name": "qName",
						"type": "string",
						"default": "",
						"description": "Descriptive name of the data connection."
					},
					{
						"displayName": "Q Type",
						"name": "qType",
						"type": "string",
						"default": "",
						"description": "Type of connection - indicates connection provider type."
					},
					{
						"displayName": "Space",
						"name": "space",
						"type": "string",
						"default": "",
						"description": "ID of the space in which the connection shall be created."
					},
					{
						"displayName": "Q Log On",
						"name": "qLogOn",
						"type": "number",
						"default": 0,
						"description": "The type of user of the data connection: 0 for the service user, 1 for the current user."
					},
					{
						"displayName": "Q Password",
						"name": "qPassword",
						"type": "string",
						"default": "",
						"description": "Any logon password associated with the data connection (connector encoded)."
					},
					{
						"displayName": "Q Username",
						"name": "qUsername",
						"type": "string",
						"default": "",
						"description": "Any logon username associated with the data connection."
					},
					{
						"displayName": "Datasource ID",
						"name": "datasourceID",
						"type": "string",
						"default": "",
						"description": "ID of the datasource of the connection."
					},
					{
						"displayName": "QRI In Request",
						"name": "qriInRequest",
						"type": "string",
						"default": "",
						"description": "QRI string of the connection."
					},
					{
						"displayName": "Q Architecture",
						"name": "qArchitecture",
						"type": "number",
						"default": 0,
						"description": "The q architecture."
					},
					{
						"displayName": "Q Credentials ID",
						"name": "qCredentialsID",
						"type": "string",
						"default": "",
						"description": "ID of the credential associated with the connection."
					},
					{
						"displayName": "Q Engine Object ID",
						"name": "qEngineObjectID",
						"type": "string",
						"default": "",
						"description": "Unique identifier (UUID) for the data connection as specified by the Sense engine."
					},
					{
						"displayName": "Q Credentials Name",
						"name": "qCredentialsName",
						"type": "string",
						"default": "",
						"description": "Name of the credential associated with the connection."
					},
					{
						"displayName": "Q Connect Statement",
						"name": "qConnectStatement",
						"type": "string",
						"default": "",
						"description": "Connection string for the data connection."
					},
					{
						"displayName": "Q Connection Secret",
						"name": "qConnectionSecret",
						"type": "string",
						"default": "",
						"description": "String that contains connection specific secret (or password) that requires encryption before persist to database."
					},
					{
						"displayName": "Q Separate Credentials",
						"name": "qSeparateCredentials",
						"type": "boolean",
						"default": false,
						"description": "Whether to create a connection without stored credentials."
					},
					{
						"displayName": "Auth URL Only",
						"name": "authUrlOnly",
						"type": "boolean",
						"default": false,
						"description": "Whether to return only the authentication URL."
					},
					{
						"displayName": "Connection Properties",
						"name": "connectionProperties",
						"type": "json",
						"default": "{}",
						"description": "Connection properties required to create dataconnection for the given datasource, which is defined by the response of 'GET /v1/data-sources/:{datasourceId}/api-specs'."
					}
				]
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"createDataFolder"
						]
					}
				},
				"description": "The name of the folder."
			},
			{
				"displayName": "Space",
				"name": "dataFileConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataFileConnectionsIdOptional"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"createDataFolder"
						]
					}
				},
				"description": "The data file connection of the space. Leave empty for the personal space."
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"createDataFolder"
						]
					}
				},
				"options": [
					{
						"displayName": "Folder ID",
						"name": "folderId",
						"type": "string",
						"default": "",
						"description": "The ID of the folder, for example from Create data folder."
					}
				]
			},
			{
				"displayName": "Data Connection ID",
				"name": "dataConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataConnectionsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"deleteDataConnection"
						]
					}
				},
				"description": "Connection ID."
			},
			{
				"displayName": "Data File ID",
				"name": "dataFileId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataFilesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"deleteDataFile"
						]
					}
				},
				"description": "The ID of the data file or folder to delete."
			},
			{
				"displayName": "Data file IDs",
				"name": "ids",
				"type": "string",
				"typeOptions": {
					"multipleValues": true,
					"multipleValueButtonText": "Add Data file ID"
				},
				"default": [],
				"required": true,
				"description": "The IDs of the data files to delete. One value per field; an expression may also return a list.",
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"deleteDataFiles"
						]
					}
				}
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesIdOptional"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"getChangeStore"
						]
					}
				},
				"description": "The space of the change store. Only narrows the list of change stores; leave empty when you enter the store ID."
			},
			{
				"displayName": "Store ID",
				"name": "storeId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListChangeStoresStoreId",
					"loadOptionsDependsOn": [
						"spaceId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"getChangeStore"
						]
					}
				},
				"description": "The id of the change store."
			},
			{
				"displayName": "Data Connection ID",
				"name": "dataConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataConnectionsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"getDataConnection"
						]
					}
				},
				"description": "Connection ID."
			},
			{
				"displayName": "Data File ID",
				"name": "dataFileId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataFilesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"getDataFile"
						]
					}
				},
				"description": "The ID of the data file."
			},
			{
				"displayName": "Item ID",
				"name": "itemId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListItemsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"item"
						],
						"operation": [
							"getItem"
						]
					}
				},
				"description": "The item's unique identifier."
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesIdOptional"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listChangeStoreColumns"
						]
					}
				},
				"description": "The space of the change store. Only narrows the list of change stores; leave empty when you enter the store ID."
			},
			{
				"displayName": "Store ID",
				"name": "storeId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListChangeStoresStoreId",
					"loadOptionsDependsOn": [
						"spaceId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listChangeStoreColumns"
						]
					}
				},
				"description": "The id of the change store."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listChangeStoreColumns"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listChangeStoreColumns"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "A SCIM filter expression used to filter the result."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "string",
						"default": "",
						"description": "Sort results by a field, with optional + (asc) or - (desc) prefix."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesIdOptional"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listChangeStoreTable"
						]
					}
				},
				"description": "The space of the change store. Only narrows the list of change stores; leave empty when you enter the store ID."
			},
			{
				"displayName": "Store ID",
				"name": "storeId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListChangeStoresStoreId",
					"loadOptionsDependsOn": [
						"spaceId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listChangeStoreTable"
						]
					}
				},
				"description": "The id of the change store."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listChangeStoreTable"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listChangeStoreTable"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "A SCIM filter expression used to filter the result."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listChangeStores"
						]
					}
				},
				"description": "The space ID to filter change stores by."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listChangeStores"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listChangeStores"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "A SCIM filter expression used to filter the result."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "string",
						"default": "",
						"description": "Sort results by a field, with optional + (asc) or - (desc) prefix."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Space",
				"name": "spaceId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListSpaceChoicesIdOptional"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listCurrentChanges"
						]
					}
				},
				"description": "The space of the change store. Only narrows the list of change stores; leave empty when you enter the store ID."
			},
			{
				"displayName": "Store ID",
				"name": "storeId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListChangeStoresStoreId",
					"loadOptionsDependsOn": [
						"spaceId"
					]
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listCurrentChanges"
						]
					}
				},
				"description": "The id of the change store."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listCurrentChanges"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"change store"
						],
						"operation": [
							"listCurrentChanges"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "A SCIM filter expression used to filter the result."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "string",
						"default": "",
						"description": "Sort results by a field, with optional + (asc) or - (desc) prefix."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"listDataConnections"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"listDataConnections"
						]
					}
				},
				"options": [
					{
						"displayName": "Data Name",
						"name": "dataName",
						"type": "string",
						"default": "",
						"description": "Provides an alternate name to be used for data[] element in GET response."
					},
					{
						"displayName": "Personal",
						"name": "personal",
						"type": "boolean",
						"default": false,
						"description": "Whether to list only personal connections. Ignored when a space is set."
					},
					{
						"displayName": "Owner",
						"name": "owner",
						"type": "string",
						"default": "",
						"description": "Filtering on datafile connections by owner (i.e."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "string",
						"default": "",
						"description": "Name of field sort on for pagination, with prefix with + or - indicating ascending or descending order."
					},
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "Filtering resources by properties (filterable properties only) using SCIM filter string."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"listDataFileConnections"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"listDataFileConnections"
						]
					}
				},
				"options": [
					{
						"displayName": "App ID",
						"name": "appId",
						"type": "string",
						"default": "",
						"description": "If present, get connections with connection strings that are scoped to the given app ID."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "If present, only return connections with the given name."
					},
					{
						"displayName": "Personal",
						"name": "personal",
						"type": "boolean",
						"default": false,
						"description": "Whether to return only the connections that access data in a personal space."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "Any",
								"value": ""
							},
							{
								"name": "spaceId",
								"value": "spaceId"
							},
							{
								"name": "+spaceId",
								"value": "+spaceId"
							},
							{
								"name": "-spaceId",
								"value": "-spaceId"
							}
						],
						"default": "",
						"description": "The name of the field used to sort the result."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "If present, only return the connection that accesses data files in the specified space."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"listDataFiles"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"listDataFiles"
						]
					}
				},
				"options": [
					{
						"displayName": "App ID",
						"name": "appId",
						"type": "string",
						"default": "",
						"description": "Only return files scoped to the specified app."
					},
					{
						"displayName": "Base Name Wildcard",
						"name": "baseNameWildcard",
						"type": "string",
						"default": "",
						"description": "Returns only files whose name matches this pattern; * stands for any text and ? for one character, for example sales* or *.csv."
					},
					{
						"displayName": "Data File Connection ID",
						"name": "dataFileConnectionId",
						"type": "string",
						"default": "",
						"description": "Return files and folders that reside in the space referenced by the specified DataFiles connection."
					},
					{
						"displayName": "Folder Path",
						"name": "folderPath",
						"type": "string",
						"default": "",
						"description": "If present, return only items which reside under the specified folder path."
					},
					{
						"displayName": "Include Folders",
						"name": "includeFolders",
						"type": "boolean",
						"default": false,
						"description": "Whether to include folders in the list."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "Returns only the data file with exactly this name, for example sales.csv. To find files by a part of the name, use Base name wildcard."
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "If present, fetch the data files for the specified owner."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "Any",
								"value": ""
							},
							{
								"name": "name",
								"value": "name"
							},
							{
								"name": "+name",
								"value": "+name"
							},
							{
								"name": "-name",
								"value": "-name"
							},
							{
								"name": "size",
								"value": "size"
							},
							{
								"name": "+size",
								"value": "+size"
							},
							{
								"name": "-size",
								"value": "-size"
							},
							{
								"name": "modifiedDate",
								"value": "modifiedDate"
							},
							{
								"name": "+modifiedDate",
								"value": "+modifiedDate"
							},
							{
								"name": "-modifiedDate",
								"value": "-modifiedDate"
							},
							{
								"name": "folder",
								"value": "folder"
							},
							{
								"name": "+folder",
								"value": "+folder"
							},
							{
								"name": "-folder",
								"value": "-folder"
							},
							{
								"name": "baseName",
								"value": "baseName"
							},
							{
								"name": "+baseName",
								"value": "+baseName"
							},
							{
								"name": "-baseName",
								"value": "-baseName"
							}
						],
						"default": "",
						"description": "The name of the field used to sort the result."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"item"
						],
						"operation": [
							"listItems"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"item"
						],
						"operation": [
							"listItems"
						]
					}
				},
				"options": [
					{
						"displayName": "Collection ID",
						"name": "collectionId",
						"type": "string",
						"default": "",
						"description": "The collection's unique identifier."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The case-insensitive string used to search for a resource by name."
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "Owner identifier."
					},
					{
						"displayName": "Query",
						"name": "query",
						"type": "string",
						"default": "",
						"description": "The case-insensitive string used to search for a resource by name or description."
					},
					{
						"displayName": "Resource Type",
						"name": "resourceType",
						"type": "options",
						"options": [
							{
								"name": "Any",
								"value": ""
							},
							{
								"name": "app",
								"value": "app"
							},
							{
								"name": "qlikview",
								"value": "qlikview"
							},
							{
								"name": "qvapp",
								"value": "qvapp"
							},
							{
								"name": "genericlink",
								"value": "genericlink"
							},
							{
								"name": "sharingservicetask",
								"value": "sharingservicetask"
							},
							{
								"name": "note",
								"value": "note"
							},
							{
								"name": "dataasset",
								"value": "dataasset"
							},
							{
								"name": "dataset",
								"value": "dataset"
							},
							{
								"name": "automation",
								"value": "automation"
							},
							{
								"name": "automl-experiment",
								"value": "automl-experiment"
							},
							{
								"name": "automl-deployment",
								"value": "automl-deployment"
							},
							{
								"name": "assistant",
								"value": "assistant"
							},
							{
								"name": "dataproduct",
								"value": "dataproduct"
							},
							{
								"name": "dataqualityrule",
								"value": "dataqualityrule"
							},
							{
								"name": "glossary",
								"value": "glossary"
							},
							{
								"name": "knowledgebase",
								"value": "knowledgebase"
							},
							{
								"name": "script",
								"value": "script"
							},
							{
								"name": "semantictype",
								"value": "semantictype"
							},
							{
								"name": "page",
								"value": "page"
							}
						],
						"default": "",
						"description": "The case-sensitive string used to filter items by resourceType(s)."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "Any",
								"value": ""
							},
							{
								"name": "+createdAt",
								"value": "+createdAt"
							},
							{
								"name": "-createdAt",
								"value": "-createdAt"
							},
							{
								"name": "+name",
								"value": "+name"
							},
							{
								"name": "-name",
								"value": "-name"
							},
							{
								"name": "+updatedAt",
								"value": "+updatedAt"
							},
							{
								"name": "-updatedAt",
								"value": "-updatedAt"
							},
							{
								"name": "+recentlyUsed",
								"value": "+recentlyUsed"
							},
							{
								"name": "-recentlyUsed",
								"value": "-recentlyUsed"
							}
						],
						"default": "",
						"description": "The property of a resource to sort on (default sort is +createdAt)."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space's unique identifier (supports \\'personal\\' as spaceId)."
					},
					{
						"displayName": "Space Type",
						"name": "spaceType",
						"type": "options",
						"options": [
							{
								"name": "Any",
								"value": ""
							},
							{
								"name": "shared",
								"value": "shared"
							},
							{
								"name": "managed",
								"value": "managed"
							},
							{
								"name": "personal",
								"value": "personal"
							},
							{
								"name": "data",
								"value": "data"
							}
						],
						"default": "",
						"description": "The case-sensitive string used to filter items on space type(s)."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Data Connection ID",
				"name": "dataConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataConnectionsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"updateDataConnection"
						]
					}
				},
				"description": "Connection ID."
			},
			{
				"displayName": "Q ID",
				"name": "qID",
				"type": "string",
				"default": "",
				"required": true,
				"description": "Unique identifier for the data connection.",
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"updateDataConnection"
						]
					}
				}
			},
			{
				"displayName": "Q Name",
				"name": "qName",
				"type": "string",
				"default": "",
				"required": true,
				"description": "Descriptive name of the data connection.",
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"updateDataConnection"
						]
					}
				}
			},
			{
				"displayName": "Q Type",
				"name": "qType",
				"type": "string",
				"default": "",
				"required": true,
				"description": "Type of connection - indicates connection provider type.",
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"updateDataConnection"
						]
					}
				}
			},
			{
				"displayName": "Q Engine Object ID",
				"name": "qEngineObjectID",
				"type": "string",
				"default": "",
				"required": true,
				"description": "Unique identifier for the data connection as specified by the Sense engine.",
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"updateDataConnection"
						]
					}
				}
			},
			{
				"displayName": "Q Connect Statement",
				"name": "qConnectStatement",
				"type": "string",
				"default": "",
				"required": true,
				"description": "Connection string for the data connection.",
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"updateDataConnection"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data connection"
						],
						"operation": [
							"updateDataConnection"
						]
					}
				},
				"options": [
					{
						"displayName": "Space",
						"name": "space",
						"type": "string",
						"default": "",
						"description": "ID of the space to which the connection belongs."
					},
					{
						"displayName": "Q Log On",
						"name": "qLogOn",
						"type": "number",
						"default": 0,
						"description": "The type of user of the data connection: 0 for the service user, 1 for the current user."
					},
					{
						"displayName": "Q Password",
						"name": "qPassword",
						"type": "string",
						"default": "",
						"description": "Any logon password associated with the data connection."
					},
					{
						"displayName": "Q Username",
						"name": "qUsername",
						"type": "string",
						"default": "",
						"description": "Any logon username associated with the data connection."
					},
					{
						"displayName": "Datasource ID",
						"name": "datasourceID",
						"type": "string",
						"default": "",
						"description": "ID of the datasource associated with this connection."
					},
					{
						"displayName": "Q Architecture",
						"name": "qArchitecture",
						"type": "number",
						"default": 0,
						"description": "The q architecture."
					},
					{
						"displayName": "Q Credentials ID",
						"name": "qCredentialsID",
						"type": "string",
						"default": "",
						"description": "ID of the credential associated with the connection."
					},
					{
						"displayName": "Q Credentials Name",
						"name": "qCredentialsName",
						"type": "string",
						"default": "",
						"description": "Name of the credential associated with the connection."
					},
					{
						"displayName": "Q Connection Secret",
						"name": "qConnectionSecret",
						"type": "string",
						"default": "",
						"description": "String that contains connection level secret (or password)."
					},
					{
						"displayName": "Q Separate Credentials",
						"name": "qSeparateCredentials",
						"type": "boolean",
						"default": false,
						"description": "Whether the connection has no stored credentials."
					}
				]
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"uploadDataFile"
						]
					}
				},
				"description": "The file name, for example sales.csv."
			},
			{
				"displayName": "Space",
				"name": "dataFileConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataFileConnectionsIdOptional"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"uploadDataFile"
						]
					}
				},
				"description": "The data file connection of the space. Leave empty for the personal space."
			},
			{
				"displayName": "If the file exists",
				"name": "ifExists",
				"type": "options",
				"options": [
					{
						"name": "replace",
						"value": "replace"
					},
					{
						"name": "fail",
						"value": "fail"
					}
				],
				"default": "replace",
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"uploadDataFile"
						]
					}
				},
				"description": "What happens when a data file with this name already exists in the space or folder: replace (the default) replaces its content, fail stops with an error."
			},
			{
				"displayName": "Input Binary Field",
				"name": "binaryPropertyName",
				"type": "string",
				"default": "data",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"uploadDataFile"
						]
					}
				},
				"hint": "The name of the input binary field containing the file to send",
				"description": "The content of the data file."
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data file"
						],
						"operation": [
							"uploadDataFile"
						]
					}
				},
				"options": [
					{
						"displayName": "Folder ID",
						"name": "folderId",
						"type": "string",
						"default": "",
						"description": "The ID of the folder, for example from Create data folder."
					},
					{
						"displayName": "Data file to replace",
						"name": "dataFileId",
						"type": "options",
						"typeOptions": {
							"loadOptionsMethod": "loadListDataFilesIdOptional"
						},
						"default": "",
						"description": "The data file to replace, also under another name. Leave empty to upload by name."
					}
				]
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"changeGlossaryTermStatus"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Term ID",
				"name": "termId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"changeGlossaryTermStatus"
						]
					}
				},
				"description": "The term id."
			},
			{
				"displayName": "Status",
				"name": "status",
				"type": "options",
				"options": [
					{
						"name": "draft",
						"value": "draft"
					},
					{
						"name": "verified",
						"value": "verified"
					},
					{
						"name": "deprecated",
						"value": "deprecated"
					}
				],
				"default": "draft",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"changeGlossaryTermStatus"
						]
					}
				},
				"description": "The status to update to."
			},
			{
				"displayName": "App Type",
				"name": "appType",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The app type.",
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"createDataAsset"
						]
					}
				}
			},
			{
				"displayName": "Technical Name",
				"name": "technicalName",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The technical name.",
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"createDataAsset"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"createDataAsset"
						]
					}
				},
				"options": [
					{
						"displayName": "ID",
						"name": "id",
						"type": "string",
						"default": "",
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
					},
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "The tags. One value per field; an expression may also return a list."
					},
					{
						"displayName": "App ID",
						"name": "appId",
						"type": "string",
						"default": "",
						"description": "The app id."
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "The value is automatically set by the application."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space id."
					},
					{
						"displayName": "Version",
						"name": "version",
						"type": "number",
						"default": 0,
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Properties",
						"name": "properties",
						"type": "json",
						"default": "{}",
						"description": "A Map of name-value pairs."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Data Freshness",
						"name": "dataFreshness",
						"type": "string",
						"default": "",
						"description": "The date-time when the source data was last changed."
					},
					{
						"displayName": "Data Store Info",
						"name": "dataStoreInfo",
						"type": "json",
						"default": "{}",
						"description": "The data store info."
					},
					{
						"displayName": "Technical Description",
						"name": "technicalDescription",
						"type": "string",
						"default": "",
						"description": "The technical description."
					}
				]
			},
			{
				"displayName": "Type",
				"name": "type",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The type.",
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						],
						"operation": [
							"createDataStore"
						]
					}
				}
			},
			{
				"displayName": "Technical Name",
				"name": "technicalName",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The technical name.",
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						],
						"operation": [
							"createDataStore"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						],
						"operation": [
							"createDataStore"
						]
					}
				},
				"options": [
					{
						"displayName": "ID",
						"name": "id",
						"type": "string",
						"default": "",
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "URI",
						"name": "uri",
						"type": "string",
						"default": "",
						"description": "The uri."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
					},
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "The tags. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "The value is automatically set by the application."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space id."
					},
					{
						"displayName": "Version",
						"name": "version",
						"type": "number",
						"default": 0,
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Properties",
						"name": "properties",
						"type": "json",
						"default": "{}",
						"description": "A Map of name-value pairs."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Technical Description",
						"name": "technicalDescription",
						"type": "string",
						"default": "",
						"description": "The technical description."
					}
				]
			},
			{
				"displayName": "QRI",
				"name": "qri",
				"type": "string",
				"default": "",
				"required": true,
				"description": "NOTE: this will be deprecated after migration to secureQri.",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"createDataset"
						]
					}
				}
			},
			{
				"displayName": "Secure QRI",
				"name": "secureQri",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The secure qri.",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"createDataset"
						]
					}
				}
			},
			{
				"displayName": "Data Asset Info",
				"name": "dataAssetInfo",
				"type": "json",
				"default": "{}",
				"required": true,
				"description": "The data asset info.",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"createDataset"
						]
					}
				}
			},
			{
				"displayName": "Technical Name",
				"name": "technicalName",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The technical name.",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"createDataset"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"createDataset"
						]
					}
				},
				"options": [
					{
						"displayName": "ID",
						"name": "id",
						"type": "string",
						"default": "",
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
					},
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "The tags. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Type",
						"name": "type",
						"type": "string",
						"default": "",
						"description": "The type."
					},
					{
						"displayName": "Schema",
						"name": "schema",
						"type": "json",
						"default": "{}",
						"description": "Optional field to specify additional schemas for files where multiple tables or sheets are available."
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "The value is automatically set by the application."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space id."
					},
					{
						"displayName": "Version",
						"name": "version",
						"type": "number",
						"default": 0,
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Properties",
						"name": "properties",
						"type": "json",
						"default": "{}",
						"description": "A Map of name-value pairs."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Operational",
						"name": "operational",
						"type": "json",
						"default": "{}",
						"description": "The operational."
					},
					{
						"displayName": "App Type Override",
						"name": "appTypeOverride",
						"type": "string",
						"default": "",
						"description": "Optional override of DataAsset appType."
					},
					{
						"displayName": "Additional Schemas",
						"name": "additionalSchemas",
						"type": "json",
						"default": "[]",
						"description": "Optional field to specify additional schemas for files where multiple tables or sheets are available."
					},
					{
						"displayName": "Technical Description",
						"name": "technicalDescription",
						"type": "string",
						"default": "",
						"description": "The technical description."
					},
					{
						"displayName": "Created By Connection ID",
						"name": "createdByConnectionId",
						"type": "string",
						"default": "",
						"description": "The connectionId that created the Dataset."
					}
				]
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"description": "Name of the glossary.",
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"createGlossary"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"createGlossary"
						]
					}
				},
				"options": [
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "List of tags for glossary. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "Unique unique identifier of the space to contain the glossary."
					},
					{
						"displayName": "Overview",
						"name": "overview",
						"type": "string",
						"default": "",
						"description": "Overview of the glossary content."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "Description of the glossary."
					},
					{
						"displayName": "Term Template",
						"name": "termTemplate",
						"type": "json",
						"default": "{}",
						"description": "The term template."
					}
				]
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"createGlossaryCategory"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"createGlossaryCategory"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name of the category."
					},
					{
						"displayName": "Parent ID",
						"name": "parentId",
						"type": "string",
						"default": "",
						"description": "The parent id."
					},
					{
						"displayName": "Stewards",
						"name": "stewards",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Steward"
						},
						"default": [],
						"description": "This list contains the UIDs of the stewards of the category. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					}
				]
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"createGlossaryTerm"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The name.",
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"createGlossaryTerm"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"createGlossaryTerm"
						]
					}
				},
				"options": [
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "The tags. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Links To",
						"name": "linksTo",
						"type": "json",
						"default": "[]",
						"description": "The links to."
					},
					{
						"displayName": "Stewards",
						"name": "stewards",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Steward"
						},
						"default": [],
						"description": "This list contain the UIDs for the term's stewards. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Relates To",
						"name": "relatesTo",
						"type": "json",
						"default": "[]",
						"description": "The relates to."
					},
					{
						"displayName": "Categories",
						"name": "categories",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Category"
						},
						"default": [],
						"description": "Category Ids that the term belongs to. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Abbreviation",
						"name": "abbreviation",
						"type": "string",
						"default": "",
						"description": "The abbreviation."
					},
					{
						"displayName": "Related Information",
						"name": "relatedInformation",
						"type": "string",
						"default": "",
						"description": "Related information for the term."
					}
				]
			},
			{
				"displayName": "Data asset ID",
				"name": "dataAssetId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"deleteDataAsset"
						]
					}
				},
				"description": "The ID of the data asset."
			},
			{
				"displayName": "Dataset ID",
				"name": "datasetId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"deleteDataset"
						]
					}
				},
				"description": "The ID of the dataset."
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"deleteGlossary"
						]
					}
				},
				"description": "The id of the glossary to delete."
			},
			{
				"displayName": "Category ID",
				"name": "categoryId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"deleteGlossaryCategory"
						]
					}
				},
				"description": "The id for the category to delete."
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"deleteGlossaryCategory"
						]
					}
				},
				"description": "The id of the glossary."
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"deleteGlossaryTerm"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Term ID",
				"name": "termId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"deleteGlossaryTerm"
						]
					}
				},
				"description": "The term id."
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"exportGlossary"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Data Asset ID",
				"name": "dataAssetId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"getDataAsset"
						]
					}
				},
				"description": "The data asset id."
			},
			{
				"displayName": "Data Store ID",
				"name": "dataStoreId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataStoresId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						],
						"operation": [
							"getDataStore"
						]
					}
				},
				"description": "The data store id."
			},
			{
				"displayName": "Dataset ID",
				"name": "datasetId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"getDataset"
						]
					}
				},
				"description": "The dataset id."
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"getGlossary"
						]
					}
				},
				"description": "The id of the glossary to retrieve."
			},
			{
				"displayName": "Category ID",
				"name": "categoryId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"getGlossaryCategory"
						]
					}
				},
				"description": "The category id."
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"getGlossaryCategory"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"getGlossaryTerm"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Term ID",
				"name": "termId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"getGlossaryTerm"
						]
					}
				},
				"description": "The term id."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"importGlossary"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
					},
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "The tags. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Terms",
						"name": "terms",
						"type": "json",
						"default": "[]",
						"description": "The terms."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space id."
					},
					{
						"displayName": "Overview",
						"name": "overview",
						"type": "string",
						"default": "",
						"description": "Overview of the glossary."
					},
					{
						"displayName": "Categories",
						"name": "categories",
						"type": "json",
						"default": "[]",
						"description": "The categories."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Term Template",
						"name": "termTemplate",
						"type": "json",
						"default": "{}",
						"description": "The term template."
					}
				]
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"importGlossary"
						]
					}
				},
				"options": [
					{
						"displayName": "Importer As Fallback Steward",
						"name": "importerAsFallbackSteward",
						"type": "boolean",
						"default": false,
						"description": "Whether to add the importing user as steward to categories and terms that have no steward or whose steward is not found."
					},
					{
						"displayName": "Lookup User On Email",
						"name": "lookupUserOnEmail",
						"type": "boolean",
						"default": false,
						"description": "Whether to look up the stewards by the e-mail addresses in the steward fields."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The spaceId (leave blank or omit for personal)."
					}
				]
			},
			{
				"displayName": "Data Store ID",
				"name": "dataStoreId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataStoresId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"listDataAssets"
						]
					}
				},
				"description": "Comma-separated data store IDs or * to include all data stores."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"listDataAssets"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"listDataAssets"
						]
					}
				},
				"options": [
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						],
						"operation": [
							"listDataStores"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						],
						"operation": [
							"listDataStores"
						]
					}
				},
				"options": [
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Data Asset ID",
				"name": "dataAssetId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"listDatasets"
						]
					}
				},
				"description": "Comma-separated data asset IDs or * to include all data assets."
			},
			{
				"displayName": "Data Store ID",
				"name": "dataStoreId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataStoresId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"listDatasets"
						]
					}
				},
				"description": "Comma-separated data store IDs or * to include all data stores."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"listDatasets"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"listDatasets"
						]
					}
				},
				"options": [
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"listGlossaries"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"listGlossaries"
						]
					}
				},
				"options": [
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "Any",
								"value": ""
							},
							{
								"name": "name",
								"value": "name"
							},
							{
								"name": "+name",
								"value": "+name"
							},
							{
								"name": "-name",
								"value": "-name"
							},
							{
								"name": "description",
								"value": "description"
							},
							{
								"name": "+description",
								"value": "+description"
							},
							{
								"name": "-description",
								"value": "-description"
							}
						],
						"default": "",
						"description": "Optional resource field name to sort on, eg."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"listGlossaryCategories"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"listGlossaryCategories"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"listGlossaryCategories"
						]
					}
				},
				"options": [
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "Any",
								"value": ""
							},
							{
								"name": "description",
								"value": "description"
							},
							{
								"name": "+description",
								"value": "+description"
							},
							{
								"name": "-description",
								"value": "-description"
							},
							{
								"name": "name",
								"value": "name"
							},
							{
								"name": "+name",
								"value": "+name"
							},
							{
								"name": "-name",
								"value": "-name"
							},
							{
								"name": "update",
								"value": "update"
							},
							{
								"name": "+update",
								"value": "+update"
							},
							{
								"name": "-update",
								"value": "-update"
							}
						],
						"default": "",
						"description": "Optional resource field name to sort on, eg."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"listGlossaryTerms"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"listGlossaryTerms"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"listGlossaryTerms"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "Optional SCIM filter to be used to filter terms Usable fields are - id - name - relatedInformation - description - abbreviation - tags - stewards - status - categories."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "Any",
								"value": ""
							},
							{
								"name": "abbreviation",
								"value": "abbreviation"
							},
							{
								"name": "+abbreviation",
								"value": "+abbreviation"
							},
							{
								"name": "-abbreviation",
								"value": "-abbreviation"
							},
							{
								"name": "description",
								"value": "description"
							},
							{
								"name": "+description",
								"value": "+description"
							},
							{
								"name": "-description",
								"value": "-description"
							},
							{
								"name": "name",
								"value": "name"
							},
							{
								"name": "+name",
								"value": "+name"
							},
							{
								"name": "-name",
								"value": "-name"
							},
							{
								"name": "status",
								"value": "status"
							},
							{
								"name": "+status",
								"value": "+status"
							},
							{
								"name": "-status",
								"value": "-status"
							},
							{
								"name": "updated",
								"value": "updated"
							},
							{
								"name": "+updated",
								"value": "+updated"
							},
							{
								"name": "-updated",
								"value": "-updated"
							}
						],
						"default": "",
						"description": "Optional resource field name to sort on, eg."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Data Asset ID",
				"name": "dataAssetId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"updateDataAsset"
						]
					}
				},
				"description": "The data asset id."
			},
			{
				"displayName": "App Type",
				"name": "appType",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The app type.",
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"updateDataAsset"
						]
					}
				}
			},
			{
				"displayName": "Technical Name",
				"name": "technicalName",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The technical name.",
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"updateDataAsset"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data asset"
						],
						"operation": [
							"updateDataAsset"
						]
					}
				},
				"options": [
					{
						"displayName": "ID",
						"name": "id",
						"type": "string",
						"default": "",
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
					},
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "The tags. One value per field; an expression may also return a list."
					},
					{
						"displayName": "App ID",
						"name": "appId",
						"type": "string",
						"default": "",
						"description": "The app id."
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "The value is automatically set by the application."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space id."
					},
					{
						"displayName": "Version",
						"name": "version",
						"type": "number",
						"default": 0,
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Properties",
						"name": "properties",
						"type": "json",
						"default": "{}",
						"description": "A Map of name-value pairs."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Data Freshness",
						"name": "dataFreshness",
						"type": "string",
						"default": "",
						"description": "The date-time when the source data was last changed."
					},
					{
						"displayName": "Data Store Info",
						"name": "dataStoreInfo",
						"type": "json",
						"default": "{}",
						"description": "The data store info."
					},
					{
						"displayName": "Technical Description",
						"name": "technicalDescription",
						"type": "string",
						"default": "",
						"description": "The technical description."
					}
				]
			},
			{
				"displayName": "Data Store ID",
				"name": "dataStoreId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListDataStoresId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						],
						"operation": [
							"updateDataStore"
						]
					}
				},
				"description": "The data store id."
			},
			{
				"displayName": "Type",
				"name": "type",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The type.",
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						],
						"operation": [
							"updateDataStore"
						]
					}
				}
			},
			{
				"displayName": "Technical Name",
				"name": "technicalName",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The technical name.",
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						],
						"operation": [
							"updateDataStore"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"data store"
						],
						"operation": [
							"updateDataStore"
						]
					}
				},
				"options": [
					{
						"displayName": "ID",
						"name": "id",
						"type": "string",
						"default": "",
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "URI",
						"name": "uri",
						"type": "string",
						"default": "",
						"description": "The uri."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
					},
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "The tags. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "The value is automatically set by the application."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space id."
					},
					{
						"displayName": "Version",
						"name": "version",
						"type": "number",
						"default": 0,
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Properties",
						"name": "properties",
						"type": "json",
						"default": "{}",
						"description": "A Map of name-value pairs."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Technical Description",
						"name": "technicalDescription",
						"type": "string",
						"default": "",
						"description": "The technical description."
					}
				]
			},
			{
				"displayName": "Dataset ID",
				"name": "datasetId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"updateDataset"
						]
					}
				},
				"description": "The dataset id."
			},
			{
				"displayName": "QRI",
				"name": "qri",
				"type": "string",
				"default": "",
				"required": true,
				"description": "NOTE: this will be deprecated after migration to secureQri.",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"updateDataset"
						]
					}
				}
			},
			{
				"displayName": "Secure QRI",
				"name": "secureQri",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The secure qri.",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"updateDataset"
						]
					}
				}
			},
			{
				"displayName": "Data Asset Info",
				"name": "dataAssetInfo",
				"type": "json",
				"default": "{}",
				"required": true,
				"description": "The data asset info.",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"updateDataset"
						]
					}
				}
			},
			{
				"displayName": "Technical Name",
				"name": "technicalName",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The technical name.",
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"updateDataset"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"dataset"
						],
						"operation": [
							"updateDataset"
						]
					}
				},
				"options": [
					{
						"displayName": "ID",
						"name": "id",
						"type": "string",
						"default": "",
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
					},
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "The tags. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Type",
						"name": "type",
						"type": "string",
						"default": "",
						"description": "The type."
					},
					{
						"displayName": "Schema",
						"name": "schema",
						"type": "json",
						"default": "{}",
						"description": "Optional field to specify additional schemas for files where multiple tables or sheets are available."
					},
					{
						"displayName": "Owner ID",
						"name": "ownerId",
						"type": "string",
						"default": "",
						"description": "The value is automatically set by the application."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space id."
					},
					{
						"displayName": "Version",
						"name": "version",
						"type": "number",
						"default": 0,
						"description": "Only required when updating the resource."
					},
					{
						"displayName": "Properties",
						"name": "properties",
						"type": "json",
						"default": "{}",
						"description": "A Map of name-value pairs."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Operational",
						"name": "operational",
						"type": "json",
						"default": "{}",
						"description": "The operational."
					},
					{
						"displayName": "App Type Override",
						"name": "appTypeOverride",
						"type": "string",
						"default": "",
						"description": "Optional override of DataAsset appType."
					},
					{
						"displayName": "Additional Schemas",
						"name": "additionalSchemas",
						"type": "json",
						"default": "[]",
						"description": "Optional field to specify additional schemas for files where multiple tables or sheets are available."
					},
					{
						"displayName": "Technical Description",
						"name": "technicalDescription",
						"type": "string",
						"default": "",
						"description": "The technical description."
					},
					{
						"displayName": "Created By Connection ID",
						"name": "createdByConnectionId",
						"type": "string",
						"default": "",
						"description": "The connectionId that created the Dataset."
					}
				]
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"updateGlossary"
						]
					}
				},
				"description": "The id of the glossary to update."
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"description": "Name of the glossary.",
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"updateGlossary"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"glossary"
						],
						"operation": [
							"updateGlossary"
						]
					}
				},
				"options": [
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "List of tags for glossary. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "Unique unique identifier of the space to contain the glossary."
					},
					{
						"displayName": "Overview",
						"name": "overview",
						"type": "string",
						"default": "",
						"description": "Overview of the glossary content."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "Description of the glossary."
					},
					{
						"displayName": "Term Template",
						"name": "termTemplate",
						"type": "json",
						"default": "{}",
						"description": "The term template."
					}
				]
			},
			{
				"displayName": "Category ID",
				"name": "categoryId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"updateGlossaryCategory"
						]
					}
				},
				"description": "The category id."
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"updateGlossaryCategory"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"glossary category"
						],
						"operation": [
							"updateGlossaryCategory"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name of the category."
					},
					{
						"displayName": "Parent ID",
						"name": "parentId",
						"type": "string",
						"default": "",
						"description": "The parent id."
					},
					{
						"displayName": "Stewards",
						"name": "stewards",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Steward"
						},
						"default": [],
						"description": "This list contains the UIDs of the stewards of the category. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					}
				]
			},
			{
				"displayName": "Glossary ID",
				"name": "glossaryId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListGlossariesId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"updateGlossaryTerm"
						]
					}
				},
				"description": "The glossary id."
			},
			{
				"displayName": "Term ID",
				"name": "termId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"updateGlossaryTerm"
						]
					}
				},
				"description": "The term id."
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The name.",
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"updateGlossaryTerm"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"glossary term"
						],
						"operation": [
							"updateGlossaryTerm"
						]
					}
				},
				"options": [
					{
						"displayName": "Tags",
						"name": "tags",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Tag"
						},
						"default": [],
						"description": "The tags. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Links To",
						"name": "linksTo",
						"type": "json",
						"default": "[]",
						"description": "The links to."
					},
					{
						"displayName": "Stewards",
						"name": "stewards",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Steward"
						},
						"default": [],
						"description": "This list contain the UIDs for the term's stewards. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Relates To",
						"name": "relatesTo",
						"type": "json",
						"default": "[]",
						"description": "The relates to."
					},
					{
						"displayName": "Categories",
						"name": "categories",
						"type": "string",
						"typeOptions": {
							"multipleValues": true,
							"multipleValueButtonText": "Add Category"
						},
						"default": [],
						"description": "Category Ids that the term belongs to. One value per field; an expression may also return a list."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Abbreviation",
						"name": "abbreviation",
						"type": "string",
						"default": "",
						"description": "The abbreviation."
					},
					{
						"displayName": "Related Information",
						"name": "relatedInformation",
						"type": "string",
						"default": "",
						"description": "Related information for the term."
					}
				]
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"copyAutomation"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Name",
				"name": "name",
				"type": "string",
				"default": "",
				"required": true,
				"description": "Name of the new automation.",
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"copyAutomation"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"createAutomation"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The space id."
					},
					{
						"displayName": "Schedules",
						"name": "schedules",
						"type": "json",
						"default": "[]",
						"description": "The schedules."
					},
					{
						"displayName": "Workspace",
						"name": "workspace",
						"type": "json",
						"default": "{}",
						"description": "The workspace generated by the Qlik Automate editor."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Max Concurrent Runs",
						"name": "maxConcurrentRuns",
						"type": "number",
						"default": 0,
						"description": "Maximum number of concurrent runs allowed for this automation."
					}
				]
			},
			{
				"displayName": "Connector ID",
				"name": "connectorId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The unique identifier of the connector from which the automation connection is created.",
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"createAutomationConnection"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"createAutomationConnection"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name of the created automation connection."
					},
					{
						"displayName": "Params",
						"name": "params",
						"type": "json",
						"default": "[]",
						"description": "The params."
					},
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The unique identifier of the space in which the automation connection is created."
					}
				]
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"deleteAutomation"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Automation Connection ID",
				"name": "automationConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationConnectionsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"deleteAutomationConnection"
						]
					}
				},
				"description": "The unique identifier for the automation connection."
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"deleteAutomationConnection"
						]
					}
				},
				"options": [
					{
						"displayName": "Forced",
						"name": "forced",
						"type": "boolean",
						"default": false,
						"description": "Whether to delete the automation connection even if automations use it."
					}
				]
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"disableAutomation"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"enableAutomation"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"exportAutomationRun"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Run ID",
				"name": "runId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"exportAutomationRun"
						]
					}
				},
				"description": "The unique identifier for the run."
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"getAutomation"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Automation Connection ID",
				"name": "automationConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationConnectionsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"getAutomationConnection"
						]
					}
				},
				"description": "The unique identifier for the automation connection."
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"getAutomationRun"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Run ID",
				"name": "runId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"getAutomationRun"
						]
					}
				},
				"description": "The unique identifier for the run."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"listAutomationConnections"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"listAutomationConnections"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "Filters the result based on the specified criteria: name, connectorId, ownerId, or spaceId."
					},
					{
						"displayName": "List All",
						"name": "listAll",
						"type": "boolean",
						"default": false,
						"description": "Whether to list all connections."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "id",
								"value": "id"
							},
							{
								"name": "name",
								"value": "name"
							},
							{
								"name": "createdAt",
								"value": "createdAt"
							},
							{
								"name": "updatedAt",
								"value": "updatedAt"
							},
							{
								"name": "+id",
								"value": "+id"
							},
							{
								"name": "+name",
								"value": "+name"
							},
							{
								"name": "+createdAt",
								"value": "+createdAt"
							},
							{
								"name": "+updatedAt",
								"value": "+updatedAt"
							},
							{
								"name": "-id",
								"value": "-id"
							},
							{
								"name": "-name",
								"value": "-name"
							},
							{
								"name": "-createdAt",
								"value": "-createdAt"
							},
							{
								"name": "-updatedAt",
								"value": "-updatedAt"
							}
						],
						"default": "id",
						"description": "The field to sort by, with +- prefix indicating sort order."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"listAutomationRuns"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"listAutomationRuns"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"listAutomationRuns"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "Allowed filters: status, context, startTime, title, spaceId, ownerId, executedById, billable."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "id",
								"value": "id"
							},
							{
								"name": "status",
								"value": "status"
							},
							{
								"name": "startTime",
								"value": "startTime"
							},
							{
								"name": "-id",
								"value": "-id"
							},
							{
								"name": "-status",
								"value": "-status"
							},
							{
								"name": "-startTime",
								"value": "-startTime"
							},
							{
								"name": "+id",
								"value": "+id"
							},
							{
								"name": "+status",
								"value": "+status"
							},
							{
								"name": "+startTime",
								"value": "+startTime"
							}
						],
						"default": "id",
						"description": "The field to sort by, with +- prefix indicating sort order."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"listAutomations"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"listAutomations"
						]
					}
				},
				"options": [
					{
						"displayName": "Filter",
						"name": "filter",
						"type": "string",
						"default": "",
						"description": "Allowed filters: name, runMode, lastRunStatus, ownerId, spaceId."
					},
					{
						"displayName": "List All",
						"name": "listAll",
						"type": "boolean",
						"default": false,
						"description": "Whether to list all automations."
					},
					{
						"displayName": "Sort",
						"name": "sort",
						"type": "options",
						"options": [
							{
								"name": "id",
								"value": "id"
							},
							{
								"name": "name",
								"value": "name"
							},
							{
								"name": "runMode",
								"value": "runMode"
							},
							{
								"name": "state",
								"value": "state"
							},
							{
								"name": "createdAt",
								"value": "createdAt"
							},
							{
								"name": "updatedAt",
								"value": "updatedAt"
							},
							{
								"name": "lastRunAt",
								"value": "lastRunAt"
							},
							{
								"name": "lastRunStatus",
								"value": "lastRunStatus"
							},
							{
								"name": "+id",
								"value": "+id"
							},
							{
								"name": "+name",
								"value": "+name"
							},
							{
								"name": "+runMode",
								"value": "+runMode"
							},
							{
								"name": "+state",
								"value": "+state"
							},
							{
								"name": "+createdAt",
								"value": "+createdAt"
							},
							{
								"name": "+updatedAt",
								"value": "+updatedAt"
							},
							{
								"name": "+lastRunAt",
								"value": "+lastRunAt"
							},
							{
								"name": "+lastRunStatus",
								"value": "+lastRunStatus"
							},
							{
								"name": "-id",
								"value": "-id"
							},
							{
								"name": "-name",
								"value": "-name"
							},
							{
								"name": "-runMode",
								"value": "-runMode"
							},
							{
								"name": "-state",
								"value": "-state"
							},
							{
								"name": "-createdAt",
								"value": "-createdAt"
							},
							{
								"name": "-updatedAt",
								"value": "-updatedAt"
							},
							{
								"name": "-lastRunAt",
								"value": "-lastRunAt"
							},
							{
								"name": "-lastRunStatus",
								"value": "-lastRunStatus"
							},
							{
								"name": "maxConcurrentRuns",
								"value": "maxConcurrentRuns"
							},
							{
								"name": "+maxConcurrentRuns",
								"value": "+maxConcurrentRuns"
							},
							{
								"name": "-maxConcurrentRuns",
								"value": "-maxConcurrentRuns"
							}
						],
						"default": "id",
						"description": "The field to sort by, with +- prefix indicating sort order."
					},
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"minValue": 1,
							"maxValue": 5000,
							"numberPrecision": 0
						},
						"default": 100,
						"description": "The maximum number of items to return, between 1 and 5000."
					}
				]
			},
			{
				"displayName": "Automation Connection ID",
				"name": "automationConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationConnectionsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"moveAutomationConnectionToSpace"
						]
					}
				},
				"description": "The unique identifier for the automation connection."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"moveAutomationConnectionToSpace"
						]
					}
				},
				"options": [
					{
						"displayName": "Space ID",
						"name": "spaceId",
						"type": "string",
						"default": "",
						"description": "The unique identifier of the new space."
					}
				]
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"moveAutomationToSpace"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Space ID",
				"name": "spaceId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The unique identifier of the new space.",
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"moveAutomationToSpace"
						]
					}
				}
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"retryAutomationRun"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Run ID",
				"name": "runId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"retryAutomationRun"
						]
					}
				},
				"description": "The unique identifier for the run."
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"runAutomation"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Context",
				"name": "context",
				"type": "options",
				"options": [
					{
						"name": "api",
						"value": "api"
					}
				],
				"default": "api",
				"required": true,
				"description": "The source that triggers the automation will set the context.",
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"runAutomation"
						]
					}
				}
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"stopAutomationRun"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Run ID",
				"name": "runId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation run"
						],
						"operation": [
							"stopAutomationRun"
						]
					}
				},
				"description": "The unique identifier for the run."
			},
			{
				"displayName": "Automation ID",
				"name": "automationId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"updateAutomation"
						]
					}
				},
				"description": "The unique identifier for the automation."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation"
						],
						"operation": [
							"updateAutomation"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The name."
					},
					{
						"displayName": "Schedules",
						"name": "schedules",
						"type": "json",
						"default": "[]",
						"description": "The schedules."
					},
					{
						"displayName": "Workspace",
						"name": "workspace",
						"type": "json",
						"default": "{}",
						"description": "The workspace generated by the Qlik Automate editor."
					},
					{
						"displayName": "Description",
						"name": "description",
						"type": "string",
						"default": "",
						"description": "The description."
					},
					{
						"displayName": "Max Concurrent Runs",
						"name": "maxConcurrentRuns",
						"type": "number",
						"default": 0,
						"description": "Maximum number of concurrent runs allowed for this automation."
					}
				]
			},
			{
				"displayName": "Automation Connection ID",
				"name": "automationConnectionId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAutomationConnectionsId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"updateAutomationConnection"
						]
					}
				},
				"description": "The unique identifier for the automation connection."
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"automation connection"
						],
						"operation": [
							"updateAutomationConnection"
						]
					}
				},
				"options": [
					{
						"displayName": "Name",
						"name": "name",
						"type": "string",
						"default": "",
						"description": "The new name of the automation connection to be renamed to."
					},
					{
						"displayName": "Params",
						"name": "params",
						"type": "json",
						"default": "[]",
						"description": "The params."
					}
				]
			},
			{
				"displayName": "Link",
				"name": "url",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The link of the report file, for example from the trigger.",
				"displayOptions": {
					"show": {
						"resource": [
							"report file"
						],
						"operation": [
							"downloadAncoreShareFile"
						]
					}
				}
			},
			{
				"displayName": "Put Output File in Field",
				"name": "dataPropertyName",
				"type": "string",
				"default": "data",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report file"
						],
						"operation": [
							"downloadAncoreShareFile"
						]
					}
				},
				"hint": "The name of the output binary field to put the file in"
			},
			{
				"displayName": "Links",
				"name": "urls",
				"type": "string",
				"typeOptions": {
					"multipleValues": true,
					"multipleValueButtonText": "Add Link"
				},
				"default": [],
				"required": true,
				"description": "The links of the report files, at most 50. One value per field; an expression may also return a list.",
				"displayOptions": {
					"show": {
						"resource": [
							"report file"
						],
						"operation": [
							"downloadAncoreShareFiles"
						]
					}
				}
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"report file"
						],
						"operation": [
							"downloadAncoreShareFiles"
						]
					}
				}
			},
			{
				"displayName": "Put Output File in Field",
				"name": "dataPropertyName",
				"type": "string",
				"default": "data",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"report file"
						],
						"operation": [
							"downloadAncoreShareFiles"
						]
					}
				},
				"hint": "The name of the output binary field to put the file in"
			},
			{
				"displayName": "Account ID",
				"name": "accountId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"getAncoreShareReportUsage"
						]
					}
				},
				"description": "The ancoreShare account ID (customer number)."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceIdOptional"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"getAncoreShareReportUsage"
						]
					}
				},
				"description": "Only runs of this app."
			},
			{
				"displayName": "Report",
				"name": "reportId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAncoreShareReportsIdOptional",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"getAncoreShareReportUsage"
						]
					}
				},
				"description": "Only runs of this report button."
			},
			{
				"displayName": "Qlik user ID",
				"name": "userId",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"getAncoreShareReportUsage"
						]
					}
				},
				"description": "Only runs of this Qlik user."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"getAncoreShareReportUsage"
						]
					}
				}
			},
			{
				"displayName": "Account ID",
				"name": "accountId",
				"type": "string",
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"listAncoreShareAutomatedRuns"
						]
					}
				},
				"description": "The ancoreShare account ID (customer number)."
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceIdOptional"
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"listAncoreShareAutomatedRuns"
						]
					}
				},
				"description": "Only runs of this app."
			},
			{
				"displayName": "Report",
				"name": "reportId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAncoreShareReportsIdOptional",
					"loadOptionsDependsOn": [
						"appId"
					]
				},
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"listAncoreShareAutomatedRuns"
						]
					}
				},
				"description": "Only runs of this report button."
			},
			{
				"displayName": "Task ID",
				"name": "taskId",
				"type": "string",
				"default": "",
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"listAncoreShareAutomatedRuns"
						]
					}
				},
				"description": "Only the run with this task ID, for example from Run ancoreShare report."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"listAncoreShareAutomatedRuns"
						]
					}
				}
			},
			{
				"displayName": "Options",
				"name": "options",
				"type": "collection",
				"placeholder": "Add Option",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"usage"
						],
						"operation": [
							"listAncoreShareAutomatedRuns"
						]
					}
				},
				"options": [
					{
						"displayName": "Limit",
						"name": "limit",
						"type": "number",
						"typeOptions": {
							"numberPrecision": 0
						},
						"default": 0,
						"description": "The maximum number of runs, between 1 and 1000. Default 100."
					}
				]
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"ancoreShare Report"
						],
						"operation": [
							"listAncoreShareReports"
						]
					}
				},
				"description": "The app with the report button."
			},
			{
				"displayName": "Output",
				"name": "outputMode",
				"type": "options",
				"options": [
					{
						"name": "One Item per Entry",
						"value": "items",
						"description": "Each entry of the list is an item"
					},
					{
						"name": "One Item With All Entries",
						"value": "whole",
						"description": "One item with the list in value and, where available, totalRows and truncated"
					}
				],
				"default": "items",
				"displayOptions": {
					"show": {
						"resource": [
							"ancoreShare Report"
						],
						"operation": [
							"listAncoreShareReports"
						]
					}
				}
			},
			{
				"displayName": "App",
				"name": "appId",
				"type": "options",
				"typeOptions": {
					"loadOptionsMethod": "loadListAppChoicesResourceId"
				},
				"default": "",
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"ancoreShare Report"
						],
						"operation": [
							"runAncoreShareReport"
						]
					}
				},
				"description": "The app with the report button."
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
				"required": true,
				"displayOptions": {
					"show": {
						"resource": [
							"ancoreShare Report"
						],
						"operation": [
							"runAncoreShareReport"
						]
					}
				},
				"description": "The ancoreShare report button."
			},
			{
				"displayName": "Account ID",
				"name": "accountId",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The ancoreShare account ID (customer number).",
				"displayOptions": {
					"show": {
						"resource": [
							"ancoreShare Report"
						],
						"operation": [
							"runAncoreShareReport"
						]
					}
				}
			},
			{
				"displayName": "Execution token",
				"name": "executionToken",
				"type": "string",
				"default": "",
				"required": true,
				"description": "The ancoreShare execution token of the user the report runs for; each user has an own token.",
				"displayOptions": {
					"show": {
						"resource": [
							"ancoreShare Report"
						],
						"operation": [
							"runAncoreShareReport"
						]
					}
				}
			},
			{
				"displayName": "Additional Fields",
				"name": "additionalFields",
				"type": "collection",
				"placeholder": "Add Field",
				"default": {},
				"displayOptions": {
					"show": {
						"resource": [
							"ancoreShare Report"
						],
						"operation": [
							"runAncoreShareReport"
						]
					}
				},
				"options": [
					{
						"displayName": "Export type",
						"name": "exportType",
						"type": "string",
						"default": "",
						"description": "The export type, default as configured in the button."
					},
					{
						"displayName": "Bookmark",
						"name": "bookmark",
						"type": "string",
						"default": "",
						"description": "A bookmark to apply before the report runs."
					},
					{
						"displayName": "Selections",
						"name": "select",
						"type": "string",
						"default": "",
						"description": "Selections to apply before the report runs: one field with its values (Region,North,South), or for several fields the select=… part of the ancoreShare execution link (select=Region,North&select=Year,2026)."
					},
					{
						"displayName": "Notification",
						"name": "notification",
						"type": "string",
						"default": "",
						"description": "When ancoreShare sends a mail about the run, for example success."
					},
					{
						"displayName": "Notification mail",
						"name": "notificationEmail",
						"type": "string",
						"default": "",
						"description": "The mail address for the notification."
					}
				]
			}
		]
	};

	methods = {
		loadOptions: {
			async loadGetAppsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadGetAppsIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps', {"limit":1000}, {}, 'value', 'id', 'name', true);
			},
			async loadListAncoreShareReportsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/ancoreshare/apps/{appId}/reports', {}, {"appId":"appId"}, 'value', 'id', 'title');
			},
			async loadListAncoreShareReportsIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/ancoreshare/apps/{appId}/reports', {}, {"appId":"appId"}, 'value', 'id', 'title', true);
			},
			async loadListAppChoicesResourceId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/app-choices', {"limit":1000}, {}, 'value', 'resourceId', 'name');
			},
			async loadListAppChoicesResourceIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/app-choices', {"limit":1000}, {}, 'value', 'resourceId', 'name', true);
			},
			async loadListAutomationConnectionsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/automation-connections', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListAutomationConnectionsIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/automation-connections', {"limit":1000}, {}, 'value', 'id', 'name', true);
			},
			async loadListAutomationsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/automations', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListAutomationsIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/automations', {"limit":1000}, {}, 'value', 'id', 'name', true);
			},
			async loadListBookmarksId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/bookmarks', {}, {"appId":"appId"}, 'value', 'id', 'title');
			},
			async loadListBookmarksIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/bookmarks', {}, {"appId":"appId"}, 'value', 'id', 'title', true);
			},
			async loadListChangeStoresStoreId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/change-stores', {"limit":1000}, {"spaceId":"spaceId"}, 'value', 'storeId', 'storeName');
			},
			async loadListChangeStoresStoreIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/change-stores', {"limit":1000}, {"spaceId":"spaceId"}, 'value', 'storeId', 'storeName', true);
			},
			async loadListDataConnectionsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/data-connections', {"limit":1000}, {}, 'value', 'id', 'qName');
			},
			async loadListDataConnectionsIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/data-connections', {"limit":1000}, {}, 'value', 'id', 'qName', true);
			},
			async loadListDataFileConnectionsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/data-file-connections', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListDataFileConnectionsIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/data-file-connections', {"limit":1000}, {}, 'value', 'id', 'name', true);
			},
			async loadListDataFilesId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/data-files', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListDataFilesIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/data-files', {"limit":1000}, {}, 'value', 'id', 'name', true);
			},
			async loadListDataObjectsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/data-objects', {}, {"appId":"appId"}, 'value', 'id', 'title');
			},
			async loadListDataObjectsIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/data-objects', {}, {"appId":"appId"}, 'value', 'id', 'title', true);
			},
			async loadListDataStoresId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/data-stores', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListDataStoresIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/data-stores', {"limit":1000}, {}, 'value', 'id', 'name', true);
			},
			async loadListDimensionsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/dimensions', {}, {"appId":"appId"}, 'value', 'id', 'title');
			},
			async loadListDimensionsIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/dimensions', {}, {"appId":"appId"}, 'value', 'id', 'title', true);
			},
			async loadListGlossariesId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/glossaries', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListGlossariesIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/glossaries', {"limit":1000}, {}, 'value', 'id', 'name', true);
			},
			async loadListGroupsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/groups', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListGroupsIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/groups', {"limit":1000}, {}, 'value', 'id', 'name', true);
			},
			async loadListItemsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/items', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListItemsIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/items', {"limit":1000}, {}, 'value', 'id', 'name', true);
			},
			async loadListMeasuresId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/measures', {}, {"appId":"appId"}, 'value', 'id', 'title');
			},
			async loadListMeasuresIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/measures', {}, {"appId":"appId"}, 'value', 'id', 'title', true);
			},
			async loadListReloadTasksId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/reload-tasks', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListReloadTasksIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/reload-tasks', {"limit":1000}, {}, 'value', 'id', 'name', true);
			},
			async loadListReloadVariableChoicesName(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/reload-variables', {}, {"appId":"appId"}, 'value', 'name', 'title');
			},
			async loadListReloadVariableChoicesNameOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/reload-variables', {}, {"appId":"appId"}, 'value', 'name', 'title', true);
			},
			async loadListReportTemplatesId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/report-templates', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListReportTemplatesIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/report-templates', {"limit":1000}, {}, 'value', 'id', 'name', true);
			},
			async loadListScriptsResourceId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/scripts', {"limit":1000}, {}, 'value', 'resourceId', 'name');
			},
			async loadListScriptsResourceIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/scripts', {"limit":1000}, {}, 'value', 'resourceId', 'name', true);
			},
			async loadListSheetsId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/sheets', {}, {"appId":"appId"}, 'value', 'id', 'title');
			},
			async loadListSheetsIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/sheets', {}, {"appId":"appId"}, 'value', 'id', 'title', true);
			},
			async loadListSpaceChoicesId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/space-choices', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListSpaceChoicesIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/space-choices', {"limit":1000}, {}, 'value', 'id', 'name', true);
			},
			async loadListSpacesId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/spaces', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListSpacesIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/spaces', {"limit":1000}, {}, 'value', 'id', 'name', true);
			},
			async loadListUsersId(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/users', {"limit":1000}, {}, 'value', 'id', 'name');
			},
			async loadListUsersIdOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/users', {"limit":1000}, {}, 'value', 'id', 'name', true);
			},
			async loadListVariablesName(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/variables', {}, {"appId":"appId"}, 'value', 'name', 'name');
			},
			async loadListVariablesNameOptional(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return loadOptions.call(this, BASE_URL, CLIENT, '/v1/apps/{appId}/variables', {}, {"appId":"appId"}, 'value', 'name', 'name', true);
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return runOperations.call(this, OPERATIONS, BASE_URL, CLIENT);
	}
}
