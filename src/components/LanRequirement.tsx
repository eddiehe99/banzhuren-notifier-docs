import React from 'react';
import Admonition from '@theme/Admonition';

export default function LanRequirement() {
    return (
        <div>
            <Admonition type="info" title="必须">
                教室的电脑和班主任的电脑，都【必须】能使用共享。
            </Admonition>
            <Admonition type="info" title="必须">
                班主任的电脑【必须】保持开机。
            </Admonition>
        </div>
    );
}