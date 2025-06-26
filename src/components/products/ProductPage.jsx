import React from 'react';
import './ProductPage.css';
import RiceVarietyCard from './RiceVarietyCard';

export default function ProductPage() {
  return (
    <div className="product-page">
      <div className="product-top-text">
        <p>
          We offer an extensive range of Indian rice varieties in the segment of 
          <strong> Basmati </strong> and <strong> Non-Basmati</strong>, 
          to serve our overseas and institutional buyer.
        </p>
      </div>

      <h1 className="product-heading">BASMATI RICE</h1>

      <RiceVarietyCard 
        name="1121 Rice"
        features={[
          "Longest Grain of Rice",
          "Average Length - 8.35cm",
          "Unrivalled length",
          "Available Forms of 1121:"
        ]}
        forms={[
          "1121 Basmati Raw",
          "1121 Basmati Steam",
          "1121 Basmati Sella",
          "1121 Basmati Golden Sella"
        ]}
      />

      <RiceVarietyCard 
        name="1509 Rice"
        features={[
          "1509 rice, aka Pusa Basmati.",
          "Among the oldest varieties.",
          "Maturity in just 120 days.",
          "Average Yield - 4.25 t/ha",
          "Available Forms of 1509:"
        ]}
        forms={[
          "1509 Basmati Raw",
          "1509 Basmati Steam",
          "1509 Basmati Sella",
          "1509 Basmati Golden Sella"
        ]}
      />

      <RiceVarietyCard
        name="1401 Rice"
        features={[
          "Better over Pusa Basmati 1121.",
          "Even-shaped grains.",
          "Mesmerizing Aroma.",
          "Less than 4% chalky grains.",
          "Maturity - 150-155 days.",
          "Available Forms of 1401:"
        ]}
        forms={[
          "1401 Basmati Raw",
          "1401 Basmati Steam",
          "1401 Basmati Sella",
          "1401 Basmati Golden Sella"
        ]}
      />

      <h1 className="product-heading">NON-BASMATI RICE</h1>
      <RiceVarietyCard
        name="Sugandha Rice"
        features={[
          "Tempting Texture",
          "Long Grain Rice",
          "Soft After Cooking",
          "Highly Popular Globally",
        ]}
        forms={[]}
      />
      <RiceVarietyCard
        name="PR11 Rice"
        features={[
            "Long Grain Rice",
          "Terific Texture",
          "Marvellous Taste",
          "Uniform Post-Cooking Length",
        ]}
        forms={[]}
      />
      <RiceVarietyCard
        name="PR14 Rice"
        features={[
            "Long Grain Rice",
          "Royal Aroma",
          "Rich Taste",
          "Low Starch Content",
          "Easy to Digest",
          "Average Length 6.80mm"
        ]}
        forms={[]}
      />
    </div>
  );
}
