import React, { Component } from 'react';
import { message } from "antd";

export class UtilsNotificationManager {
    static success(config) {
        message.open({
            top: config.top ? config.top : 100,
            duration: config.duration ? config.duration : 1.5,
            content:
                <div className="successMessage" >
                    <div className="msg">{config.message ? config.message : null}</div>
                </div>
        });
    }
    static error(config) {
        message.open({
            top: config.top ? config.top : 100,
            duration: config.duration ? config.duration : 1.5,
            content:
                <div className="errorMessage">
                    <div className="msg">{config.message ? config.message : null}</div>
                </div>
        });
    }
}