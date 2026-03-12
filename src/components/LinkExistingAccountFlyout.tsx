'use client';

import { useState } from 'react';

interface LinkExistingAccountFlyoutProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LinkExistingAccountFlyout({ isOpen, onClose }: LinkExistingAccountFlyoutProps) {
  const [collectionName, setCollectionName] = useState('aws-aoss-rose-door');
  const [region, setRegion] = useState('');
  const [collectionType, setCollectionType] = useState('Search');
  const [collectionGroupName, setCollectionGroupName] = useState('aws-vercel-collection-group1');
  const [selectedPlan, setSelectedPlan] = useState(true);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="flyout-overlay" onClick={onClose} />
      
      {/* Flyout Panel */}
      <div className="flyout-panel">
        {/* Header */}
        <div className="flyout-header-simple">
          <h2 className="flyout-title">Install integration</h2>
          <button className="flyout-close" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 5L5 15M5 5l10 10" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flyout-content">
          {/* Integration Info */}
          <div className="integration-info-card">
            <div className="integration-info-icon">
              <img src="/Icons/Group 42.svg" alt="Amazon OpenSearch Serverless" style={{ width: '48px', height: '48px', borderRadius: '8px' }} />
            </div>
            <div className="integration-info-text">
              <h3>Amazon OpenSearch Serverless</h3>
              <p>Serverless OpenSearch</p>
            </div>
          </div>

          {/* Step Indicator */}
          <div className="flyout-step-inline">
            <div className="step-indicator">
              <span className="step-number">2</span>
            </div>
            <h2 className="step-title">Parameters, Plan and Confirmation</h2>
          </div>

          {/* Region Selection */}
          <div className="form-group">
            <label className="form-label">Region</label>
            <div className="form-input-with-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="7" cy="7" r="5" />
                <path d="M13 13l-2.5-2.5" />
              </svg>
              <input
                type="text"
                className="form-input"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                placeholder=""
              />
              <svg className="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <p className="form-hint">The primary AWS Region where your collection will be installed</p>
          </div>

          {/* Collection Name */}
          <div className="form-group">
            <label className="form-label">Collection name</label>
            <input
              type="text"
              className="form-input"
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value)}
            />
            <p className="form-hint">
              Collection name is how your Collection appears in the Vercel dashboard and AWS. Must start 
              with a lowercase letter and be 3-32 characters long. Valid characters: a-z (lowercase), 0-5.
            </p>
            <div className="form-warning">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L1 14h14L8 1z" fill="#FFA500" stroke="#FFA500" strokeWidth="1.5"/>
                <path d="M8 6v3M8 11h.01" stroke="white" strokeWidth="1.5"/>
              </svg>
              <span>The name cannot be changed after the resource is created.</span>
            </div>
          </div>

          {/* Collection Type */}
          <div className="form-group">
            <label className="form-label">Collection type</label>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="collectionType"
                  value="Search"
                  checked={collectionType === 'Search'}
                  onChange={(e) => setCollectionType(e.target.value)}
                />
                <div className="radio-text">
                  <span className="radio-label">Search</span>
                  <span className="radio-description">Full-text queries for your applications and websites</span>
                </div>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="collectionType"
                  value="Time series"
                  checked={collectionType === 'Time series'}
                  onChange={(e) => setCollectionType(e.target.value)}
                />
                <div className="radio-text">
                  <span className="radio-label">Time series</span>
                  <span className="radio-description">Log analysis and metrics data over time</span>
                </div>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="collectionType"
                  value="Vector search"
                  checked={collectionType === 'Vector search'}
                  onChange={(e) => setCollectionType(e.target.value)}
                />
                <div className="radio-text">
                  <span className="radio-label">Vector search</span>
                  <span className="radio-description">Semantic similarity using machine learning embeddings</span>
                </div>
              </label>
            </div>
          </div>

          {/* Collection Group Name - Dropdown */}
          <div className="form-group">
            <label className="form-label">Collection group name</label>
            <div className="form-select-wrapper">
              <select
                className="form-input"
                value={collectionGroupName}
                onChange={(e) => setCollectionGroupName(e.target.value)}
              >
                <option value="aws-vercel-collection-group1">aws-vercel-collection-group1</option>
                <option value="aws-vercel-collection-group2">aws-vercel-collection-group2</option>
                <option value="aws-vercel-collection-group3">aws-vercel-collection-group3</option>
              </select>
            </div>
            <p className="form-hint">
              Collections in the same group share OCUs and follow the group's min/max capacity settings
            </p>
          </div>

          {/* Plans Section */}
          <div className="plans-section">
            <h3 className="section-title">Plans</h3>
            
            <div className="plan-card-simple">
              <div className="plan-card-header">
                <h4>Amazon OpenSearch Serverless rates</h4>
                <div className="plan-radio-simple">
                  <input 
                    type="radio" 
                    checked={selectedPlan}
                    onChange={() => setSelectedPlan(!selectedPlan)}
                  />
                </div>
              </div>
              <p className="plan-card-description">
                Start with $100 USD credits for up to 6 months. Credits are consumed based on the product rates. An OCU (OpenSearch Compute Unit) is a unit of compute and memory capacity used to run your search and indexing workloads.
              </p>

              <div className="plan-details-simple">
                <div className="plan-row-simple">
                  <span className="plan-label">Billing</span>
                  <span className="plan-value">Pay-as-you-go</span>
                </div>
                <div className="plan-row-simple">
                  <span className="plan-label">Indexing Capacity</span>
                  <span className="plan-value">Scales from 0 OCU/0 GiB to 96 OCU/576 GiB</span>
                </div>
                <div className="plan-row-simple">
                  <span className="plan-label">Indexing Cost</span>
                  <span className="plan-value">$0.24 per OCU hour</span>
                </div>
                <div className="plan-row-simple">
                  <span className="plan-label">Search Capacity</span>
                  <span className="plan-value">Scales from 0 OCU/0 GiB to 96 OCU/576 GiB</span>
                </div>
                <div className="plan-row-simple">
                  <span className="plan-label">Search Cost</span>
                  <span className="plan-value">$0.24 per OCU hour</span>
                </div>
              </div>
            </div>
          </div>

          {/* Collapsed Sections */}
          <div className="collapsed-sections">
            <div className="collapsed-section">
              <div className="collapsed-section-header">
                <div className="collapsed-section-number">3</div>
                <span className="collapsed-section-title">Payment Method</span>
              </div>
            </div>
            <div className="collapsed-section">
              <div className="collapsed-section-header">
                <div className="collapsed-section-number">4</div>
                <span className="collapsed-section-title">Collection Provisioning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flyout-footer">
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button 
            className="btn-primary"
            onClick={() => {
              alert('Collection created!');
              onClose();
            }}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}
