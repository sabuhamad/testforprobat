"use client";
import { ProbatProviderClient, Experiment } from "@probat/react";
import OriginalComponent from "./Features.original";
import ExperimentVariant from "./Features.experiment";

export default function Features(props: any) {
  return (
    <ProbatProviderClient userId="a016e79e-d87f-4fe5-8dd9-c9c26fd43fdd">
      <Experiment
        id="df20618b-919b-404c-bbbc-7ddd627d19fc"
        control={<OriginalComponent {...props} />}
        variants={{ experiment: <ExperimentVariant {...props} /> }}
      />
    </ProbatProviderClient>
  );
}
