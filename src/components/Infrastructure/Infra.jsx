import React from 'react';
import "./Infra.css";

export default function Infra() {
  return (
    <div className="infra-container">
      {/* Header Section */}
      <div className="text-center mb-5">
        <img src="/images/icon-crops.png" alt="icon" className="form-icon" />
        <h2 className="infra-title">INFRASTRUCTURE</h2>
      </div>

      {/* Content Section */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="intro-text">
              White Hills is glad to mention that at present we have four milling units. These Units are situated at:-
            </p>

            {/* Units List */}
            <div className="units-section mb-4">
              <p><strong>Unit 1 :-</strong> White Hill Agro Products Pvt. Ltd. Village Niwarsi, Pipli road, Ladwa Kurukshetra.</p>
              <p><strong>Unit 2 :-</strong> White Hill Agro Products Pvt. Ltd., Village Kamoda, Dhand Kaithal Road, Kurukshetra.</p>
              <p><strong>Unit 3 :-</strong> Hindustan Rice Exports (Group Companies) GT Road, Village Sanwla, Pipli Kurukshetra.</p>
              <p><strong>Unit 4 :-</strong> Aditya International, Village Sirsma, Ladwa Road, Pipli Kurukshetra.</p>
            </div>

            {/* Production Capacity */}
            <p className="production-text mb-4">
              Our daily production capacity is <strong>290 Tons/Day</strong>. Additionally, our mills are with all the latest machinery for tracking out the commendable results. We have imported our machines from Korea and Switzerland we have well known Buhler Sortex plant for processing & state of the art packaging, and distribution plant.
            </p>

            <p className="venture-text mb-4">
              We are fortunate to own this massive venture. The plant at White Hills takes utmost care of the texture, softness, aroma, and length of every grain. Our daily production capacity from our two mills is around <strong>12 tons per hour</strong>. And we have four automatic packaging plant with the capacity of <strong>24 Tons/hour</strong> more over we are proud to have unique fumigation system which keeps our rice protected from weevils & bugs Above all, we maintain the crucial arrangements of hygiene at the time of every single operation.
            </p>

            {/* Process Sections */}
            <div className="process-sections">
              {/* Parboiling Plant */}
              <div className="process-section mb-4">
                <h4 className="process-title">Parboiling Plant</h4>
                <p>
                  We proceed towards our Parboiling step with soft water generated from our water treatment plant. These plants consist of specialized and sensors which assist in the extremely smooth completion of the respective step. Besides that, our plants keep on the perfect temperature for ending up with the supreme quality of Rice.
                </p>
              </div>

              {/* Drying Process */}
              <div className="process-section mb-4">
                <h4 className="process-title">Drying Process</h4>
                <p>
                  We can't even think of the targeted exporting in the absence of an accurate drying process. Thanks to our innovative machinery solution that makes the drying procedure unexpectedly easy. More than that, this process protects the grain from further breakage.
                </p>
              </div>

              {/* Rice Milling Process */}
              <div className="process-section mb-4">
                <h4 className="process-title">Rice milling process</h4>
                <p>
                  Coming on the final process, in this step, we make use of top-notch pre-cleaners, de huskers, polishers, Whitener, Silky, sortex, Grading, magnets, and rice bins for safeguarding the grains from further contamination & Foreign material. Loaded with the latest range of machinery, our company undertakes phenomenal milling procedures, Not just that, Still, we never compromise with the regular upgradation of our machines to land up with exceptional quality.
                </p>
              </div>

              {/* Packaging Process */}
              <div className="process-section mb-4">
                <h4 className="process-title">Packaging Process</h4>
                <p>
                  We have state of the art world class automatic weighing & packing machines for <strong>5kg to 50kg bags</strong>, and we have automatic FSS machines for <strong>1kg to 5kg packings</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}