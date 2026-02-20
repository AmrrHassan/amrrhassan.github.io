"use client";
import React from "react";
import { PixelatedCanvas } from "./ui/pixelated-canvas";
import { Card, CardTitle, CardDescription, CardSkeletonContainer } from "./ui/TechCard";

export function ProfilePixelCard() {
    return (
        <Card className="max-w-full">
            <CardSkeletonContainer className="flex items-center justify-center p-4">
                <PixelatedCanvas
                    src="images/amr.jpeg"
                    width={400}
                    height={400}
                    cellSize={6}
                    dotScale={0.7}
                    shape="square"
                    backgroundColor="transparent"
                    dropoutStrength={0.4}
                    interactive
                    distortionStrength={5}
                    distortionRadius={100}
                    distortionMode="swirl"
                    followSpeed={0.2}
                    jitterStrength={4}
                    jitterSpeed={4}
                    sampleAverage
                    tintColor="#CBACF9"
                    tintStrength={0.15}
                    responsive
                    className="rounded-xl w-full h-full object-cover"
                />
            </CardSkeletonContainer>
            <CardTitle>Hi, I&apos;m Amr</CardTitle>
            <CardDescription>
                Feel free to hover over my image if you&apos;ve already reached your limit for professional highlights. Don&apos;t worry, I reached mine long ago.
            </CardDescription>
        </Card>
    );
}
