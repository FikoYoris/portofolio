import Image from "next/image";
import Link from "next/link";

export default function AsthmaAttackCaseStudy() {
    return (
        <main className="min-h-screen bg-[#020602] text-zinc-100">

            {/* Navigation */}
            <header className="border-b border-white/10">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
                    <Link
                        href="/"
                        className="text-xl font-semibold tracking-tight transition hover:text-[#31CB00]"
                    >
                        Fiko.
                    </Link>

                    <Link
                        href="/#projects"
                        className="text-sm text-zinc-400 transition hover:text-white"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </header>

                {/* HERO */}
                <section className="border-b border-[#2A7221]/20">
                    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">

                        <div className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-[#31CB00]">
                            Deep Learning • Multimodal Time-Series • Healthcare
                        </div>

                        <h1 className="max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
                            Asthma Attack Prediction
                            <br />
                            <span className="text-zinc-400">
                                Using Deep Learning on Multimodal Time-Series Data
                            </span>
                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
                            A multimodal deep learning framework that combines physiological
                            time-series and environmental data to predict asthma exacerbation
                            risk from continuous monitoring data.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {[
                                "Python",
                                "PyTorch",
                                "CNN",
                                "BiLSTM",
                                "MLP",
                                "Multimodal Fusion",
                                "Time-Series",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-[#2A7221]/40 bg-[#071207] px-4 py-2 text-sm text-zinc-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="https://github.com/FikoYoris/Asthma-Attack-Prediction-Using-Deep-Learning-on-Multimodal-Time-Series-Data"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-[#31CB00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#5be52f]"
                            >
                                View on GitHub ↗
                            </a>

                            <a
                                href="#results"
                                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-[#31CB00]/50 hover:text-white"
                            >
                                Explore Results ↓
                            </a>
                        </div>
                    </div>
                </section>


                {/* PROJECT SNAPSHOT */}
                <section className="border-b border-[#2A7221]/20 bg-[#061006]">
                    <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">

                        <div className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-[#31CB00]">
                            Project Snapshot
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                            <StatCard
                                value="22"
                                label="Asthma Patients"
                            />

                            <StatCard
                                value="2,054"
                                label="Patient-Days"
                            />

                            <StatCard
                                value="0.967"
                                label="ROC-AUC"
                            />

                            <StatCard
                                value="0.845"
                                label="F1-Score"
                            />

                        </div>
                    </div>
                </section>


                {/* PROBLEM */}
                <section className="border-b border-white/5">
                    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">

                        <SectionHeading
                            eyebrow="01 — Problem"
                            title="Predicting asthma exacerbation before it becomes critical."
                        />

                        <div className="mt-12 grid gap-10 md:grid-cols-2">

                            <div>
                                <p className="text-lg leading-8 text-zinc-400">
                                    Asthma exacerbations can occur unexpectedly, making early
                                    prediction challenging with conventional monitoring methods.
                                    Traditional approaches are often reactive and symptom-based.
                                </p>

                                <p className="mt-6 text-lg leading-8 text-zinc-400">
                                    Wearable devices provide continuous physiological measurements,
                                    creating an opportunity to detect patterns associated with
                                    increased asthma risk before an exacerbation occurs.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-[#071007] p-8">
                                <div className="text-sm uppercase tracking-[0.2em] text-[#31CB00]">
                                    Research Motivation
                                </div>

                                <ul className="mt-6 space-y-4 text-zinc-300">
                                    <li className="flex gap-3">
                                        <span className="text-[#31CB00]">01</span>
                                        Continuous physiological monitoring
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="text-[#31CB00]">02</span>
                                        Integration of environmental information
                                    </li>

                                    <li className="flex gap-3">
                                        <span className="text-[#31CB00]">03</span>
                                        Early prediction of asthma exacerbation risk
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>


                {/* DATASET */}
                <section className="border-b border-white/5 bg-[#050a05]">
                    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">

                        <SectionHeading
                            eyebrow="02 — Dataset"
                            title="A multimodal view of asthma monitoring."
                        />

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                            The study uses the AAMOS-00 dataset containing data from 22 asthma
                            patients and 2,054 patient-days. The prediction task is formulated
                            as binary classification.
                        </p>

                        <div className="mt-12 grid gap-6 md:grid-cols-2">

                            <DataCard
                                number="01"
                                title="Physiological Time-Series"
                                description="Continuous measurements captured from wearable monitoring."
                                items={[
                                    "Heart Rate",
                                    "Step Count",
                                    "Activity Intensity",
                                ]}
                            />

                            <DataCard
                                number="02"
                                title="Environmental Data"
                                description="Environmental conditions associated with the monitoring period."
                                items={[
                                    "Temperature",
                                    "Humidity",
                                    "Pressure",
                                    "PM2.5",
                                    "PM10",
                                    "Ozone",
                                    "NO₂",
                                    "CO",
                                ]}
                            />

                        </div>
                    </div>
                </section>


                {/* MODEL */}
                <section className="border-b border-white/5">
                    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">

                        <SectionHeading
                            eyebrow="03 — Model Architecture"
                            title="CNN + BiLSTM + MLP"
                        />

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
                            The proposed framework processes physiological time-series data
                            through a CNN-BiLSTM branch while environmental variables are
                            modeled using an MLP. The extracted representations are then
                            integrated through multimodal fusion for binary classification.
                        </p>

                        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white p-4 md:p-8">
                            <Image
                                src="/asthma-attack/cnn-bilstm-architecture.png"
                                alt="CNN BiLSTM architecture"
                                width={1600}
                                height={900}
                                className="h-auto w-full"
                            />
                        </div>

                    </div>
                </section>

                {/* EXPERIMENTAL SETUP */}
                <section className="border-b border-white/5 bg-[#050a05]">
                    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">

                        <SectionHeading
                            eyebrow="04 — Experimental Setup"
                            title="How the experiment was configured."
                        />

                        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                            <InsightCard
                                number="01"
                                title="Data Split"
                                description="The dataset was divided into 70% training, 15% validation, and 15% testing using user-level splitting to prevent data leakage."
                            />

                            <InsightCard
                                number="02"
                                title="Input Preparation"
                                description="Physiological features were organized into 20-step sequences, while environmental variables were standardized separately using training-set statistics."
                            />

                            <InsightCard
                                number="03"
                                title="Training Configuration"
                                description="The model was trained with Adam optimization, a learning rate of 3×10⁻⁴, batch size 64, and up to 30 epochs with early stopping."
                            />

                            <InsightCard
                                number="04"
                                title="Class Imbalance"
                                description="Class imbalance was addressed using both WeightedRandomSampler and a positive-class weighting strategy in the binary cross-entropy loss."
                            />

                            <InsightCard
                                number="05"
                                title="Multimodal Inputs"
                                description="Seven physiological time-series features and eight environmental variables were processed through dedicated network branches before multimodal fusion."
                            />

                            <InsightCard
                                number="06"
                                title="Evaluation"
                                description="Model performance was assessed using accuracy, precision, recall, F1-score, ROC-AUC, sensitivity, specificity, and confusion matrix analysis."
                            />

                        </div>

                    </div>
                </section>

                {/* PIPELINE */}
                <section className="border-b border-white/5 bg-[#050a05]">
                    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">

                        <SectionHeading
                            eyebrow="05 — Pipeline"
                            title="From monitoring data to prediction."
                        />

                        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white p-4 md:p-8">
                            <Image
                                src="/asthma-attack/system-overview.png"
                                alt="Training and prediction pipeline"
                                width={1200}
                                height={600}
                                className="h-auto w-full"
                            />
                        </div>

                    </div>
                </section>


                {/* RESULTS */}
                <section id="results" className="border-b border-white/5">
                    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">

                        <SectionHeading
                            eyebrow="06 — Results"
                            title="Strong predictive performance."
                        />

                        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                            <ResultCard
                                value="0.864"
                                label="Accuracy"
                            />

                            <ResultCard
                                value="0.762"
                                label="Precision"
                            />

                            <ResultCard
                                value="0.949"
                                label="Recall"
                            />

                            <ResultCard
                                value="0.967"
                                label="ROC-AUC"
                            />

                        </div>

                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <ResultCard
                                value="0.845"
                                label="F1-Score"
                            />

                            <ResultCard
                                value="0.70"
                                label="F1-Optimal Threshold"
                            />
                        </div>


                        {/* MODEL COMPARISON */}
                        <div className="mt-16">

                            <div className="mb-6">
                                <h3 className="text-2xl font-semibold">
                                    Model Comparison
                                </h3>

                                <p className="mt-2 text-zinc-400">
                                    Comparison between the proposed deep learning model and
                                    traditional machine learning baselines.
                                </p>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-white/10">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-[#0b160b] text-zinc-300">
                                        <tr>
                                            <th className="px-5 py-4">Model</th>
                                            <th className="px-5 py-4">Accuracy</th>
                                            <th className="px-5 py-4">Precision</th>
                                            <th className="px-5 py-4">Recall</th>
                                            <th className="px-5 py-4">F1</th>
                                            <th className="px-5 py-4">AUC</th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-white/10 text-zinc-400">

                                        <tr className="bg-[#0b180b] text-white">
                                            <td className="px-5 py-4 font-medium">
                                                Deep Learning
                                            </td>
                                            <td className="px-5 py-4">0.864</td>
                                            <td className="px-5 py-4">0.762</td>
                                            <td className="px-5 py-4">0.949</td>
                                            <td className="px-5 py-4 text-[#31CB00]">
                                                0.845
                                            </td>
                                            <td className="px-5 py-4 text-[#31CB00]">
                                                0.967
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="px-5 py-4">Random Forest</td>
                                            <td className="px-5 py-4">0.828</td>
                                            <td className="px-5 py-4">0.701</td>
                                            <td className="px-5 py-4">0.980</td>
                                            <td className="px-5 py-4">0.817</td>
                                            <td className="px-5 py-4">0.968</td>
                                        </tr>

                                        <tr>
                                            <td className="px-5 py-4">XGBoost</td>
                                            <td className="px-5 py-4">0.851</td>
                                            <td className="px-5 py-4">0.738</td>
                                            <td className="px-5 py-4">0.959</td>
                                            <td className="px-5 py-4">0.834</td>
                                            <td className="px-5 py-4">0.966</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>


                        {/* ROC */}
                        <div className="mt-16">

                            <div className="mb-6">
                                <h3 className="text-2xl font-semibold">
                                    ROC Curve Comparison
                                </h3>

                                <p className="mt-2 text-zinc-400">
                                    The proposed deep learning model demonstrates strong
                                    discrimination performance against the baseline models.
                                </p>
                            </div>

                            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white p-4 md:p-8">
                                <Image
                                    src="/asthma-attack/roc-comparison.png"
                                    alt="ROC comparison between deep learning, random forest, and XGBoost"
                                    width={1200}
                                    height={800}
                                    className="h-auto w-full"
                                />
                            </div>

                        </div>

                    </div>
                </section>


                {/* MODEL ANALYSIS */}
                <section className="border-b border-white/5 bg-[#050a05]">
                    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">

                        <SectionHeading
                            eyebrow="07 — Model Analysis"
                            title="Understanding model behavior."
                        />

                        <div className="mt-12 grid gap-8 lg:grid-cols-2">

                            <ChartCard
                                title="F1 Score vs Threshold"
                                description="F1-score was evaluated across different classification thresholds to examine how the decision boundary affects model performance."
                                image="/asthma-attack/f1-threshold.png"
                                alt="F1 score versus classification threshold"
                            />

                            <ChartCard
                                title="Training vs Validation Loss"
                                description="Training and validation loss were tracked across epochs to examine the model's learning behavior and generalization."
                                image="/asthma-attack/loss-curve.png"
                                alt="Training and validation loss across epochs"
                            />

                        </div>

                        <div className="mt-8">
                            <ChartCard
                                title="Deep Learning ROC Curve"
                                description="The ROC curve illustrates the model's ability to distinguish between asthma exacerbation and non-exacerbation events across classification thresholds."
                                image="/asthma-attack/roc-dl.png"
                                alt="Deep learning ROC curve"
                            />
                        </div>

                    </div>
                </section>


                {/* KEY FINDINGS */}
                <section className="border-b border-white/5">
                    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">

                        <SectionHeading
                            eyebrow="08 — Key Findings"
                            title="What the experiment shows."
                        />

                        <div className="mt-12 grid gap-6 md:grid-cols-3">

                            <InsightCard
                                number="01"
                                title="High Recall"
                                description="The proposed model achieved a recall of 0.949, indicating a strong ability to identify positive asthma exacerbation cases."
                            />

                            <InsightCard
                                number="02"
                                title="Strong Discrimination"
                                description="The deep learning model achieved a ROC-AUC of 0.967 on the AAMOS-00 dataset."
                            />

                            <InsightCard
                                number="03"
                                title="Balanced Performance"
                                description="The model achieved an F1-score of 0.845, balancing precision of 0.762 with high recall of 0.949."
                            />

                        </div>

                    </div>
                </section>


                {/* POSTER */}
                <section className="border-b border-white/5 bg-[#050a05]">
                    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">

                        <SectionHeading
                            eyebrow="09 — Research Poster"
                            title="Research summary."
                        />

                        <p className="mt-6 max-w-3xl text-zinc-400">
                            A visual summary of the research background, proposed framework,
                            dataset, evaluation results, and conclusions.
                        </p>

                        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white p-3 md:p-6">
                            <Image
                                src="/asthma-attack/poster.png"
                                alt="Asthma attack prediction research poster"
                                width={1600}
                                height={1200}
                                className="h-auto w-full"
                            />
                        </div>

                    </div>
                </section>


                {/* FINAL CTA */}
                <section>
                    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">

                        <div className="rounded-3xl border border-[#2A7221]/30 bg-[#071207] p-8 md:p-12">

                            <div className="max-w-3xl">

                                <div className="text-xs font-medium uppercase tracking-[0.25em] text-[#31CB00]">
                                    Project Repository
                                </div>

                                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                                    Explore the implementation.
                                </h2>

                                <p className="mt-5 leading-7 text-zinc-400">
                                    The complete implementation, preprocessing workflow, model
                                    training, evaluation, and supporting materials are available
                                    in the project repository.
                                </p>

                                <a
                                    href="https://github.com/FikoYoris/Asthma-Attack-Prediction-Using-Deep-Learning-on-Multimodal-Time-Series-Data"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 inline-flex rounded-full bg-[#31CB00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#5be52f]"
                                >
                                    Open GitHub Repository ↗
                                </a>

                            </div>

                        </div>

                    </div>
                </section>

        </main>
    );
}


/* COMPONENTS */

function StatCard({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="rounded-2xl border border-[#2A7221]/30 bg-[#0b180b] p-6">
            <div className="text-3xl font-semibold tracking-tight text-[#75d957]">
                {value}
            </div>

            <div className="mt-2 text-sm text-zinc-400">
                {label}
            </div>
        </div>
    );
}


function ResultCard({
    value,
    label,
}: {
    value: string;
    label: string;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#071007] p-6">
            <div className="text-3xl font-semibold text-[#75d957]">
                {value}
            </div>

            <div className="mt-2 text-sm text-zinc-400">
                {label}
            </div>
        </div>
    );
}


function SectionHeading({
    eyebrow,
    title,
}: {
    eyebrow: string;
    title: string;
}) {
    return (
        <div>
            <div className="text-xs font-medium uppercase tracking-[0.25em] text-[#31CB00]">
                {eyebrow}
            </div>

            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">
                {title}
            </h2>
        </div>
    );
}


function DataCard({
    number,
    title,
    description,
    items,
}: {
    number: string;
    title: string;
    description: string;
    items: string[];
}) {
    return (
        <div className="rounded-3xl border border-white/10 bg-[#071007] p-8">

            <div className="text-sm font-medium text-[#31CB00]">
                {number}
            </div>

            <h3 className="mt-4 text-2xl font-semibold">
                {title}
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
                {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {items.map((item) => (
                    <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-300"
                    >
                        {item}
                    </span>
                ))}
            </div>

        </div>
    );
}


function ChartCard({
    title,
    description,
    image,
    alt,
}: {
    title: string;
    description: string;
    image: string;
    alt: string;
}) {
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#071007]">

            <div className="min-h-[180px] p-6 md:p-8">

                <h3 className="text-2xl font-semibold">
                    {title}
                </h3>

                <p className="mt-2 leading-7 text-zinc-400">
                    {description}
                </p>

            </div>

            <div className="mt-auto bg-white p-4">
                <Image
                    src={image}
                    alt={alt}
                    width={1000}
                    height={700}
                    className="h-auto w-full"
                />
            </div>

        </div>
    );
}


function InsightCard({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-3xl border border-white/10 bg-[#071007] p-8">

            <div className="text-sm font-medium text-[#31CB00]">
                {number}
            </div>

            <h3 className="mt-5 text-2xl font-semibold">
                {title}
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
                {description}
            </p>

        </div>
    );
}