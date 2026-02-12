"use client";
import { ProbatProviderClient, Experiment } from "@probat/react";
import OriginalComponent from "./Hero.original";
import ExperimentVariant from "./Hero.experiment";

export default function Hero(props: any) {
  return (
    <ProbatProviderClient userId="a016e79e-d87f-4fe5-8dd9-c9c26fd43fdd">
      <Experiment
        id="24adb096-ccb4-46cd-85da-27c78e13c2d0"
        control={<OriginalComponent {...props} />}
        variants={{ experiment: <ExperimentVariant {...props} /> }}
      />
    </ProbatProviderClient>
  );
}
