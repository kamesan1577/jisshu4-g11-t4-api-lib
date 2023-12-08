/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  ModerationsRequest,
  SuggestionsRequest,
  TimeLineRequest,
} from '../models/index';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    ModerationsRequestFromJSON,
    ModerationsRequestToJSON,
    SuggestionsRequestFromJSON,
    SuggestionsRequestToJSON,
    TimeLineRequestFromJSON,
    TimeLineRequestToJSON,
} from '../models/index';

export interface JudgeSafetyModerationsSuggestionsSafetyPostRequest {
    suggestionsRequest: SuggestionsRequest;
}

export interface JudgeSafetyTimelineCompletionModerationsSuggestionsTimelineSafetyPostRequest {
    timeLineRequest: TimeLineRequest;
}

export interface JudgeSafetyTimelineModerationModerationsSuggestionsTimelineSafetyWithModerationApiPostRequest {
    timeLineRequest: TimeLineRequest;
}

export interface PostCompletionModerationsPostRequest {
    moderationsRequest: ModerationsRequest;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Judge Safety
     */
    async judgeSafetyModerationsSuggestionsSafetyPostRaw(requestParameters: JudgeSafetyModerationsSuggestionsSafetyPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.suggestionsRequest === null || requestParameters.suggestionsRequest === undefined) {
            throw new runtime.RequiredError('suggestionsRequest','Required parameter requestParameters.suggestionsRequest was null or undefined when calling judgeSafetyModerationsSuggestionsSafetyPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/moderations/suggestions/safety`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SuggestionsRequestToJSON(requestParameters.suggestionsRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Judge Safety
     */
    async judgeSafetyModerationsSuggestionsSafetyPost(requestParameters: JudgeSafetyModerationsSuggestionsSafetyPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.judgeSafetyModerationsSuggestionsSafetyPostRaw(requestParameters, initOverrides);
    }

    /**
     * Judge Safety Timeline Completion
     */
    async judgeSafetyTimelineCompletionModerationsSuggestionsTimelineSafetyPostRaw(requestParameters: JudgeSafetyTimelineCompletionModerationsSuggestionsTimelineSafetyPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.timeLineRequest === null || requestParameters.timeLineRequest === undefined) {
            throw new runtime.RequiredError('timeLineRequest','Required parameter requestParameters.timeLineRequest was null or undefined when calling judgeSafetyTimelineCompletionModerationsSuggestionsTimelineSafetyPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/moderations/suggestions/timeline-safety`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TimeLineRequestToJSON(requestParameters.timeLineRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Judge Safety Timeline Completion
     */
    async judgeSafetyTimelineCompletionModerationsSuggestionsTimelineSafetyPost(requestParameters: JudgeSafetyTimelineCompletionModerationsSuggestionsTimelineSafetyPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.judgeSafetyTimelineCompletionModerationsSuggestionsTimelineSafetyPostRaw(requestParameters, initOverrides);
    }

    /**
     * Judge Safety Timeline Moderation
     */
    async judgeSafetyTimelineModerationModerationsSuggestionsTimelineSafetyWithModerationApiPostRaw(requestParameters: JudgeSafetyTimelineModerationModerationsSuggestionsTimelineSafetyWithModerationApiPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.timeLineRequest === null || requestParameters.timeLineRequest === undefined) {
            throw new runtime.RequiredError('timeLineRequest','Required parameter requestParameters.timeLineRequest was null or undefined when calling judgeSafetyTimelineModerationModerationsSuggestionsTimelineSafetyWithModerationApiPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/moderations/suggestions/timeline-safety-with-moderation-api`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TimeLineRequestToJSON(requestParameters.timeLineRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Judge Safety Timeline Moderation
     */
    async judgeSafetyTimelineModerationModerationsSuggestionsTimelineSafetyWithModerationApiPost(requestParameters: JudgeSafetyTimelineModerationModerationsSuggestionsTimelineSafetyWithModerationApiPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.judgeSafetyTimelineModerationModerationsSuggestionsTimelineSafetyWithModerationApiPostRaw(requestParameters, initOverrides);
    }

    /**
     * Post Completion
     */
    async postCompletionModerationsPostRaw(requestParameters: PostCompletionModerationsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.moderationsRequest === null || requestParameters.moderationsRequest === undefined) {
            throw new runtime.RequiredError('moderationsRequest','Required parameter requestParameters.moderationsRequest was null or undefined when calling postCompletionModerationsPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/moderations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModerationsRequestToJSON(requestParameters.moderationsRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Post Completion
     */
    async postCompletionModerationsPost(requestParameters: PostCompletionModerationsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postCompletionModerationsPostRaw(requestParameters, initOverrides);
    }

    /**
     * Read Root
     */
    async readRootGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Read Root
     */
    async readRootGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.readRootGetRaw(initOverrides);
    }

}
