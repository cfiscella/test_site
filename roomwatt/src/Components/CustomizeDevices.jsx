import React from "react";
import { useState } from "react";
import expand from '../assets/back-white.svg';
import expanded from '../assets/down-green.svg';
import SelectOn247 from "./SelectOn247";

function CustomizeDevices(props) {
    const [active, setActive] = useState("");
    // keep per-device settings here: { [deviceName]: { ...settings } }
    const [settingsByDevice, setSettingsByDevice] = useState({});

    function deviceClicked(device) {
        if (device === active) {
            setActive("");
        } else {
            setActive(device);
        }
    }

    const createDefaultSettings = (deviceName) => ({
        deviceName,
        on247: false,
        hoursPerDay: 4,
        sleepEnabled: false,
        sleepHours: 0,
        wattage: 100,
    });

    function getDeviceSettings(device) {
        return settingsByDevice[device] || createDefaultSettings(device);
    }

    function updateDeviceSettings(device, partialUpdate) {
        setSettingsByDevice((prev) => {
            const current = prev[device] || createDefaultSettings(device);
            const next = { ...current, ...partialUpdate };
            return { ...prev, [device]: next };
        });
    }

    return (
        <>
            <div className="list-wrapper">
                <p className="list-title">Your Devices</p>
                <div className="list-container">
                    {props.selectedDevices.map((device, index) => {
                        const settings = getDeviceSettings(device);

                        const activeHours = settings.on247 ? 24 : settings.hoursPerDay;
                        const totalHours =
                            activeHours + (settings.sleepEnabled ? settings.sleepHours : 0);
                        const kWhPerDay = (settings.wattage * totalHours) / 1000;
                        const kWhPerMonth = kWhPerDay * 30;
                        const costPerKWh = 0.18;
                        const monthlyCost = kWhPerMonth * costPerKWh;

                        return (
                            <div key={index}>
                                <div
                                    className="common-name-group"
                                    onClick={() => deviceClicked(device)}
                                >
                                    <p
                                        className={
                                            device === active
                                                ? "common-name common-name-active"
                                                : "common-name"
                                        }
                                    >
                                        {device}
                                    </p>

                                    <button id="expand-device-btn">
                                        <img
                                            src={device === active ? expanded : expand}
                                            alt={"EXPAND"}
                                        />
                                    </button>
                                </div>

                                {/* Expanded settings area */}
                                <div
                                    style={{
                                        maxHeight: device === active ? "260px" : "0",
                                        flexDirection: "column",
                                        overflowY: "hidden",
                                        transition: "max-height 0.1s ease-in-out",
                                    }}
                                >
                                    {device === active && (
                                        <div className="device-settings-inner">
                                            {/* 24/7 toggle */}
                                            <div className="device-field-row">
                                                <span className="device-label">On 24/7</span>
                                                <SelectOn247
                                                    checked={settings.on247}
                                                    onChange={(value) =>
                                                        updateDeviceSettings(device, { on247: value })
                                                    }
                                                />
                                            </div>

                                            {/* Hours per day slider (only show if not 24/7) */}
                                            {!settings.on247 && (
                                                <div className="device-field">
                                                    <label className="device-label">
                                                        Hours of use per day:{" "}
                                                        <span>{settings.hoursPerDay}h</span>
                                                    </label>
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="24"
                                                        value={settings.hoursPerDay}
                                                        onChange={(e) =>
                                                            updateDeviceSettings(device, {
                                                                hoursPerDay: Number(e.target.value),
                                                            })
                                                        }
                                                    />
                                                </div>
                                            )}

                                            {/* Sleep mode toggle */}
                                            <div className="device-field-row">
                                                <span className="device-label">Sleep mode</span>
                                                <input
                                                    type="checkbox"
                                                    checked={settings.sleepEnabled}
                                                    onChange={(e) =>
                                                        updateDeviceSettings(device, {
                                                            sleepEnabled: e.target.checked,
                                                        })
                                                    }
                                                />
                                            </div>

                                            {/* Sleep hours slider */}
                                            {settings.sleepEnabled && (
                                                <div className="device-field">
                                                    <label className="device-label">
                                                        Sleep hours per day:{" "}
                                                        <span>{settings.sleepHours}h</span>
                                                    </label>
                                                    <input
                                                        type="range"
                                                        min="0"
                                                        max="24"
                                                        value={settings.sleepHours}
                                                        onChange={(e) =>
                                                            updateDeviceSettings(device, {
                                                                sleepHours: Number(e.target.value),
                                                            })
                                                        }
                                                    />
                                                </div>
                                            )}

                                            {/* Wattage input */}
                                            <div className="device-field">
                                                <label className="device-label">
                                                    Device wattage (W)
                                                </label>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={settings.wattage}
                                                    onChange={(e) =>
                                                        updateDeviceSettings(device, {
                                                            wattage: Number(e.target.value) || 0,
                                                        })
                                                    }
                                                    className="device-wattage-input"
                                                />
                                            </div>

                                            {/* Summary */}
                                            <div className="device-summary">
                                                <div>
                                                    <span className="summary-label">Daily usage:</span>
                                                    <span className="summary-value">
                                                        {kWhPerDay.toFixed(2)} kWh / day
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="summary-label">
                                                        Monthly estimate:
                                                    </span>
                                                    <span className="summary-value">
                                                        {kWhPerMonth.toFixed(1)} kWh · $
                                                        {monthlyCost.toFixed(2)}/mo
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <hr
                                    style={{
                                        display:
                                            index === props.selectedDevices.length - 1 && "none",
                                    }}
                                />
                            </div>
                        );
                    })}
                    <div className="list-spacer"></div>
                </div>
            </div>
        </>
    );
}

export default CustomizeDevices;
