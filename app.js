// Data Store
const appData = {
  laborRate: 25,
  bufferPercentage: 10,
  
  bomComponents: [
    {
      category: 'Frame',
      components: [
        { partId: 'FRM-001', name: 'Aluminum Frame', description: '6061-T6 aluminum, 56cm', quantity: 1, unitCost: 180, supplier: 'FrameTech Manufacturing', leadTime: '7 days' }
      ]
    },
    {
      category: 'Motor & Electronics',
      components: [
        { partId: 'MOT-001', name: '48V Hub Motor', description: '500W direct drive hub motor', quantity: 1, unitCost: 320, supplier: 'MotorWorks Inc', leadTime: '5 days' },
        { partId: 'CTL-001', name: 'Motor Controller', description: '48V 15A sine wave controller', quantity: 1, unitCost: 85, supplier: 'ElectroControl', leadTime: '3 days' },
        { partId: 'DIS-001', name: 'LCD Display', description: 'KT-LCD3 display with buttons', quantity: 1, unitCost: 60, supplier: 'DisplayTech', leadTime: '4 days' }
      ]
    },
    {
      category: 'Battery',
      components: [
        { partId: 'BAT-001', name: '48V LiFePO4 Battery', description: '15Ah, integrated BMS, 720Wh', quantity: 1, unitCost: 480, supplier: 'PowerCell Batteries', leadTime: '10 days' }
      ]
    },
    {
      category: 'Drivetrain',
      components: [
        { partId: 'DRT-001', name: 'Crankset & Chainring', description: '170mm crank, 42T chainring', quantity: 1, unitCost: 45, supplier: 'CycleGear', leadTime: '4 days' },
        { partId: 'DRT-002', name: 'Rear Derailleur', description: '8-speed rear derailleur', quantity: 1, unitCost: 25, supplier: 'CycleGear', leadTime: '3 days' },
        { partId: 'DRT-003', name: 'Cables & Housing', description: 'Shift and brake cables (5m)', quantity: 1, unitCost: 25, supplier: 'CableCo', leadTime: '2 days' }
      ]
    },
    {
      category: 'Brakes',
      components: [
        { partId: 'BRK-001', name: 'Hydraulic Disc Brake', description: '180mm rotor, front', quantity: 2, unitCost: 45, supplier: 'BrakeMaster', leadTime: '4 days' }
      ]
    },
    {
      category: 'Wheels & Tires',
      components: [
        { partId: 'WHL-001', name: 'Wheel Set 26"', description: 'Aluminum rims with spokes (pair)', quantity: 2, unitCost: 120, supplier: 'WheelWorks', leadTime: '6 days' },
        { partId: 'TIR-001', name: 'Tires & Tubes', description: '26x2.1 all-terrain tires (pair)', quantity: 2, unitCost: 35, supplier: 'TireSource', leadTime: '4 days' }
      ]
    },
    {
      category: 'Components & Accessories',
      components: [
        { partId: 'ACC-001', name: 'Handlebars & Grips', description: 'Aluminum handlebar, ergonomic grips', quantity: 1, unitCost: 35, supplier: 'HandlePro', leadTime: '3 days' },
        { partId: 'ACC-002', name: 'Seat & Seatpost', description: 'Comfort seat, adjustable post', quantity: 1, unitCost: 40, supplier: 'SeatComfort', leadTime: '2 days' },
        { partId: 'ACC-003', name: 'Pedals', description: 'Composite platform pedals (pair)', quantity: 2, unitCost: 15, supplier: 'PedalWorks', leadTime: '2 days' },
        { partId: 'ACC-004', name: 'Fasteners & Hardware', description: 'Bolts, screws, washers, misc', quantity: 1, unitCost: 50, supplier: 'HardwareDirect', leadTime: '1 day' }
      ]
    }
  ],

  assemblySteps: [
    { stepNumber: 1, name: 'Frame Inspection & Preparation', description: 'Inspect frame for damage, clean, apply protective coating', estimatedMinutes: 15, requiredParts: ['FRM-001'] },
    { stepNumber: 2, name: 'Motor Installation', description: 'Install hub motor in rear wheel, check alignment and security', estimatedMinutes: 30, requiredParts: ['MOT-001'] },
    { stepNumber: 3, name: 'Motor Wiring & Connection', description: 'Route motor leads, connect to controller with terminals', estimatedMinutes: 20, requiredParts: ['MOT-001', 'CTL-001'] },
    { stepNumber: 4, name: 'Battery Mounting', description: 'Mount battery to frame using bracket, secure with straps', estimatedMinutes: 15, requiredParts: ['BAT-001'] },
    { stepNumber: 5, name: 'Battery Safety Check', description: 'Verify connections, test voltage output, check for leaks', estimatedMinutes: 10, requiredParts: ['BAT-001'] },
    { stepNumber: 6, name: 'Controller Installation', description: 'Mount controller to frame/seat tube, secure wiring', estimatedMinutes: 15, requiredParts: ['CTL-001'] },
    { stepNumber: 7, name: 'Display Installation', description: 'Mount display on handlebars, connect to controller', estimatedMinutes: 10, requiredParts: ['DIS-001'] },
    { stepNumber: 8, name: 'Drivetrain Assembly', description: 'Install crankset, chainring, derailleur, adjust cable tension', estimatedMinutes: 40, requiredParts: ['DRT-001', 'DRT-002'] },
    { stepNumber: 9, name: 'Brake System Installation', description: 'Install brake calipers, rotors, bleed hydraulic lines', estimatedMinutes: 45, requiredParts: ['BRK-001'] },
    { stepNumber: 10, name: 'Wheel Installation', description: 'Install wheels, check spoke tension, verify alignment', estimatedMinutes: 25, requiredParts: ['WHL-001', 'TIR-001'] },
    { stepNumber: 11, name: 'Final Assembly', description: 'Install handlebars, seat, pedals, lights, fenders', estimatedMinutes: 30, requiredParts: ['ACC-001', 'ACC-002', 'ACC-003'] },
    { stepNumber: 12, name: 'Cable Management & Cleanup', description: 'Route all cables, secure with ties, clean assembly', estimatedMinutes: 15, requiredParts: ['DRT-003'] },
    { stepNumber: 13, name: 'Software Calibration', description: 'Program controller, calibrate motor assist levels, test sensors', estimatedMinutes: 20, requiredParts: ['CTL-001', 'DIS-001'] },
    { stepNumber: 14, name: 'Quality Control Testing', description: 'Full functional test - motor, brakes, lights, range test', estimatedMinutes: 45, requiredParts: [] },
    { stepNumber: 15, name: 'Final Packaging', description: 'Box bike, include manual and warranty, seal', estimatedMinutes: 10, requiredParts: [] }
  ],

  builds: [
    {
      buildId: 'BUILD-001',
      model: 'Standard eBike',
      status: 'completed',
      startDate: '2024-11-20',
      completionDate: '2024-11-25',
      technician: 'John Smith',
      workflow: [],
      laborLog: [
        { task: 'Assembly', hours: 5.5, date: '2024-11-20' },
        { task: 'Testing', hours: 1.5, date: '2024-11-25' },
        { task: 'Quality Control', hours: 1, date: '2024-11-25' }
      ],
      modifications: [],
      totalCost: 2065
    },
    {
      buildId: 'BUILD-002',
      model: 'Premium eBike',
      status: 'in_progress',
      startDate: '2024-11-28',
      completionDate: null,
      technician: 'Sarah Johnson',
      workflow: [],
      laborLog: [
        { task: 'Frame prep', hours: 2, date: '2024-11-28' }
      ],
      modifications: [],
      totalCost: 0
    }
  ],

  productionOrders: [
    {
      orderId: 'ORDER-001',
      quantity: 5,
      model: 'Standard eBike',
      status: 'in_progress',
      targetDate: '2024-12-15',
      createdDate: '2024-11-15',
      completedUnits: 1
    }
  ]
};

// Initialize app on load
window.addEventListener('DOMContentLoaded', () => {
  initializeBOM();
  renderBuilds();
  renderOrders();
  updateAnalytics();
});

// Tab Switching
function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  event.target.classList.add('active');

  // Update content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(`${tabName}-tab`).classList.add('active');

  // Refresh content if needed
  if (tabName === 'analytics') {
    updateAnalytics();
  } else if (tabName === 'workflow') {
    renderWorkflowPipeline();
  }
}

// BOM Functions
function initializeBOM() {
  const bomContent = document.getElementById('bom-content');
  let html = '';
  let totalCost = 0;

  appData.bomComponents.forEach(category => {
    html += `<div class="category-section">`;
    html += `<h3 class="category-title">${category.category}</h3>`;
    html += `<table><thead><tr>
      <th>Part ID</th>
      <th>Component Name</th>
      <th>Description</th>
      <th>Qty</th>
      <th>Unit Cost</th>
      <th>Total</th>
      <th>Supplier</th>
      <th>Lead Time</th>
    </tr></thead><tbody>`;

    category.components.forEach(comp => {
      const lineTotal = comp.quantity * comp.unitCost;
      totalCost += lineTotal;
      html += `<tr>
        <td>${comp.partId}</td>
        <td><strong>${comp.name}</strong></td>
        <td>${comp.description}</td>
        <td>${comp.quantity}</td>
        <td>$${comp.unitCost.toFixed(2)}</td>
        <td><strong>$${lineTotal.toFixed(2)}</strong></td>
        <td>${comp.supplier}</td>
        <td>${comp.leadTime}</td>
      </tr>`;
    });

    html += `</tbody></table></div>`;
  });

  bomContent.innerHTML = html;
  document.getElementById('bom-subtotal').textContent = `$${totalCost.toFixed(2)}`;
  document.getElementById('bom-total').textContent = `$${totalCost.toFixed(2)}`;
}

function exportBOM() {
  alert('BOM export functionality - would generate CSV/PDF in production');
}

// Build Functions
function renderBuilds() {
  const buildsList = document.getElementById('builds-list');
  let html = '';

  if (appData.builds.length === 0) {
    html = '<p style="color: var(--color-text-secondary); text-align: center; padding: 40px;">No builds created yet. Click "New Build" to get started.</p>';
  } else {
    appData.builds.forEach(build => {
      const statusClass = build.status === 'completed' ? 'status-completed' : 
                         build.status === 'in_progress' ? 'status-in-progress' : 'status-pending';
      const statusText = build.status.replace('_', ' ').toUpperCase();
      
      const totalHours = build.laborLog.reduce((sum, log) => sum + log.hours, 0);
      
      html += `
        <div class="build-list-item" onclick="openBuildDetails('${build.buildId}')">
          <div class="build-header">
            <div class="build-id">${build.buildId}</div>
            <span class="status-badge ${statusClass}">${statusText}</span>
          </div>
          <div class="build-info">
            <span><strong>Model:</strong> ${build.model}</span>
            <span><strong>Technician:</strong> ${build.technician}</span>
            <span><strong>Started:</strong> ${build.startDate}</span>
            <span><strong>Labor Hours:</strong> ${totalHours.toFixed(1)}h</span>
          </div>
        </div>
      `;
    });
  }

  buildsList.innerHTML = html;
}

function openNewBuildModal() {
  document.getElementById('new-build-id').value = `BUILD-${String(appData.builds.length + 1).padStart(3, '0')}`;
  document.getElementById('new-build-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('new-build-modal').classList.add('active');
}

function createNewBuild(event) {
  event.preventDefault();
  
  const newBuild = {
    buildId: document.getElementById('new-build-id').value,
    model: document.getElementById('new-build-model').value,
    status: 'in_progress',
    startDate: document.getElementById('new-build-date').value,
    completionDate: null,
    technician: document.getElementById('new-build-technician').value,
    workflow: appData.assemblySteps.map(step => ({
      ...step,
      completed: false,
      actualMinutes: 0,
      notes: ''
    })),
    laborLog: [],
    modifications: [],
    totalCost: 0
  };

  appData.builds.push(newBuild);
  closeModal('new-build-modal');
  renderBuilds();
  updateAnalytics();
}

function openBuildDetails(buildId) {
  const build = appData.builds.find(b => b.buildId === buildId);
  if (!build) return;

  document.getElementById('build-details-title').textContent = `${build.buildId} - ${build.model}`;
  
  const totalHours = build.laborLog.reduce((sum, log) => sum + log.hours, 0);
  const laborCost = totalHours * appData.laborRate;
  
  // Calculate BOM cost
  let bomCost = 0;
  appData.bomComponents.forEach(category => {
    category.components.forEach(comp => {
      bomCost += comp.quantity * comp.unitCost;
    });
  });
  
  const totalCost = bomCost + laborCost;

  let html = `
    <div style="margin-bottom: 24px;">
      <div class="grid-3">
        <div>
          <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Status</div>
          <div style="margin-top: 4px;">
            <span class="status-badge ${build.status === 'completed' ? 'status-completed' : 'status-in-progress'}">
              ${build.status.replace('_', ' ').toUpperCase()}
            </span>
          </div>
        </div>
        <div>
          <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Technician</div>
          <div style="margin-top: 4px; font-weight: 500;">${build.technician}</div>
        </div>
        <div>
          <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">Start Date</div>
          <div style="margin-top: 4px; font-weight: 500;">${build.startDate}</div>
        </div>
      </div>
    </div>

    <h4 style="font-size: var(--font-size-lg); margin-bottom: 12px;">Assembly Workflow</h4>
    <div id="workflow-steps" style="margin-bottom: 24px;"></div>

    <div style="display: flex; gap: 16px; margin-bottom: 16px;">
      <input type="text" id="new-task-name" placeholder="Task name" class="form-control" style="flex: 1;">
      <input type="number" id="new-task-hours" placeholder="Hours" class="form-control" style="width: 100px;" step="0.5" min="0">
      <button class="btn btn-primary" onclick="addLaborEntry('${build.buildId}')">Add Labor Entry</button>
    </div>

    <h4 style="font-size: var(--font-size-lg); margin-bottom: 12px;">Labor Log</h4>
    <div class="labor-log">
      ${build.laborLog.length === 0 ? '<p style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">No labor entries yet</p>' : ''}
      ${build.laborLog.map(log => `
        <div class="labor-entry">
          <span><strong>${log.task}</strong></span>
          <span>${log.hours}h - ${log.date}</span>
        </div>
      `).join('')}
    </div>

    <div class="cost-summary" style="margin-top: 24px;">
      <h4 style="font-size: var(--font-size-lg); margin-bottom: 12px;">Cost Breakdown</h4>
      <div class="cost-row">
        <span>Parts (Standard BOM):</span>
        <span>$${bomCost.toFixed(2)}</span>
      </div>
      <div class="cost-row">
        <span>Labor (${totalHours.toFixed(1)}h @ $${appData.laborRate}/hr):</span>
        <span>$${laborCost.toFixed(2)}</span>
      </div>
      <div class="cost-row total">
        <span>Total Build Cost:</span>
        <span>$${totalCost.toFixed(2)}</span>
      </div>
    </div>

    <div style="margin-top: 24px; display: flex; gap: 12px;">
      ${build.status !== 'completed' ? `
        <button class="btn btn-primary" onclick="completeBuild('${build.buildId}')" style="flex: 1;">Mark as Completed</button>
      ` : ''}
      <button class="btn btn-secondary" onclick="closeModal('build-details-modal')" style="flex: 1;">Close</button>
    </div>
  `;

  document.getElementById('build-details-content').innerHTML = html;
  
  // Render workflow steps
  renderWorkflowSteps(build);
  
  document.getElementById('build-details-modal').classList.add('active');
}

function renderWorkflowSteps(build) {
  const container = document.getElementById('workflow-steps');
  if (!container) return;
  
  let html = '';
  
  if (!build.workflow || build.workflow.length === 0) {
    build.workflow = appData.assemblySteps.map(step => ({
      ...step,
      completed: false,
      actualMinutes: 0,
      notes: ''
    }));
  }

  build.workflow.forEach((step, index) => {
    html += `
      <div class="workflow-step ${step.completed ? 'completed' : ''}">
        <div class="workflow-header">
          <div class="checkbox-wrapper">
            <input type="checkbox" ${step.completed ? 'checked' : ''} 
              onchange="toggleWorkflowStep('${build.buildId}', ${index})">
            <span class="workflow-title">Step ${step.stepNumber}: ${step.name}</span>
          </div>
          <span style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">
            Est: ${step.estimatedMinutes}min
            ${step.actualMinutes > 0 ? ` | Actual: ${step.actualMinutes}min` : ''}
          </span>
        </div>
        <div class="workflow-details">${step.description}</div>
        ${step.requiredParts.length > 0 ? `
          <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">
            Required parts: ${step.requiredParts.join(', ')}
          </div>
        ` : ''}
        ${!step.completed ? `
          <div style="margin-top: 8px;">
            <input type="number" class="time-input" placeholder="Minutes" 
              id="actual-time-${index}" value="${step.actualMinutes || ''}" min="0">
            <button class="btn btn-small btn-secondary" style="margin-left: 8px;" 
              onclick="updateStepTime('${build.buildId}', ${index})">Update Time</button>
          </div>
        ` : ''}
      </div>
    `;
  });

  container.innerHTML = html;
}

function toggleWorkflowStep(buildId, stepIndex) {
  const build = appData.builds.find(b => b.buildId === buildId);
  if (!build) return;

  build.workflow[stepIndex].completed = !build.workflow[stepIndex].completed;
  
  // Auto-save time if completing
  if (build.workflow[stepIndex].completed) {
    const timeInput = document.getElementById(`actual-time-${stepIndex}`);
    if (timeInput && timeInput.value) {
      build.workflow[stepIndex].actualMinutes = parseInt(timeInput.value);
    } else if (build.workflow[stepIndex].actualMinutes === 0) {
      build.workflow[stepIndex].actualMinutes = build.workflow[stepIndex].estimatedMinutes;
    }
  }

  renderWorkflowSteps(build);
}

function updateStepTime(buildId, stepIndex) {
  const build = appData.builds.find(b => b.buildId === buildId);
  if (!build) return;

  const timeInput = document.getElementById(`actual-time-${stepIndex}`);
  if (timeInput && timeInput.value) {
    build.workflow[stepIndex].actualMinutes = parseInt(timeInput.value);
    renderWorkflowSteps(build);
  }
}

function addLaborEntry(buildId) {
  const build = appData.builds.find(b => b.buildId === buildId);
  if (!build) return;

  const taskName = document.getElementById('new-task-name').value;
  const hours = parseFloat(document.getElementById('new-task-hours').value);

  if (!taskName || !hours || hours <= 0) {
    alert('Please enter a valid task name and hours');
    return;
  }

  build.laborLog.push({
    task: taskName,
    hours: hours,
    date: new Date().toISOString().split('T')[0]
  });

  document.getElementById('new-task-name').value = '';
  document.getElementById('new-task-hours').value = '';

  openBuildDetails(buildId);
  updateAnalytics();
}

function completeBuild(buildId) {
  const build = appData.builds.find(b => b.buildId === buildId);
  if (!build) return;

  build.status = 'completed';
  build.completionDate = new Date().toISOString().split('T')[0];

  closeModal('build-details-modal');
  renderBuilds();
  updateAnalytics();
}

// Production Orders
function renderOrders() {
  const ordersList = document.getElementById('orders-list');
  
  if (appData.productionOrders.length === 0) {
    ordersList.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: 40px;">No production orders yet. Click "New Order" to create one.</p>';
    return;
  }

  let html = '<table><thead><tr><th>Order ID</th><th>Model</th><th>Quantity</th><th>Completed</th><th>Status</th><th>Target Date</th><th>Created</th><th>Actions</th></tr></thead><tbody>';

  appData.productionOrders.forEach(order => {
    const statusClass = order.status === 'completed' ? 'status-completed' : 
                       order.status === 'in_progress' ? 'status-in-progress' : 'status-pending';
    
    html += `<tr>
      <td><strong>${order.orderId}</strong></td>
      <td>${order.model}</td>
      <td>${order.quantity}</td>
      <td>${order.completedUnits || 0} / ${order.quantity}</td>
      <td><span class="status-badge ${statusClass}">${order.status.replace('_', ' ').toUpperCase()}</span></td>
      <td>${order.targetDate}</td>
      <td>${order.createdDate}</td>
      <td><button class="btn btn-small btn-secondary" onclick="viewOrderDetails('${order.orderId}')">Details</button></td>
    </tr>`;
  });

  html += '</tbody></table>';
  ordersList.innerHTML = html;
}

function openNewOrderModal() {
  document.getElementById('new-order-id').value = `ORDER-${String(appData.productionOrders.length + 1).padStart(3, '0')}`;
  document.getElementById('new-order-modal').classList.add('active');
}

function createNewOrder(event) {
  event.preventDefault();

  const newOrder = {
    orderId: document.getElementById('new-order-id').value,
    quantity: parseInt(document.getElementById('new-order-qty').value),
    model: document.getElementById('new-order-model').value,
    status: 'pending',
    targetDate: document.getElementById('new-order-date').value,
    createdDate: new Date().toISOString().split('T')[0],
    completedUnits: 0
  };

  appData.productionOrders.push(newOrder);
  closeModal('new-order-modal');
  renderOrders();
}

function viewOrderDetails(orderId) {
  const order = appData.productionOrders.find(o => o.orderId === orderId);
  if (!order) return;

  let bomCost = 0;
  appData.bomComponents.forEach(category => {
    category.components.forEach(comp => {
      bomCost += comp.quantity * comp.unitCost;
    });
  });

  const totalPartsNeeded = order.quantity * (1 + appData.bufferPercentage / 100);
  const totalPartsCost = bomCost * order.quantity;
  const bufferCost = bomCost * order.quantity * (appData.bufferPercentage / 100);

  alert(`Order Details: ${order.orderId}\n\nQuantity: ${order.quantity} units\nModel: ${order.model}\n\nParts Required:\n- Standard BOM × ${order.quantity} = $${totalPartsCost.toFixed(2)}\n- Buffer (${appData.bufferPercentage}%) = $${bufferCost.toFixed(2)}\n\nTotal Materials Cost: $${(totalPartsCost + bufferCost).toFixed(2)}\n\nNote: In production, this would show detailed parts ordering list`);
}

// Workflow Pipeline
function renderWorkflowPipeline() {
  const workflowContent = document.getElementById('workflow-content');
  
  const stages = {
    'Preparation': [],
    'Assembly': [],
    'Testing': [],
    'Completed': []
  };

  appData.builds.forEach(build => {
    if (build.status === 'completed') {
      stages['Completed'].push(build);
    } else {
      const completedSteps = build.workflow ? build.workflow.filter(s => s.completed).length : 0;
      const totalSteps = build.workflow ? build.workflow.length : 15;
      
      if (completedSteps < 5) {
        stages['Preparation'].push(build);
      } else if (completedSteps < 13) {
        stages['Assembly'].push(build);
      } else {
        stages['Testing'].push(build);
      }
    }
  });

  let html = '<div class="grid-4" style="gap: 16px;">';

  Object.keys(stages).forEach(stage => {
    html += `
      <div style="background-color: var(--color-bg-1); padding: 16px; border-radius: var(--radius-base); border: 1px solid var(--color-border);">
        <h4 style="font-size: var(--font-size-base); font-weight: 600; margin-bottom: 12px;">${stage}</h4>
        <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: 12px;">
          ${stages[stage].length} build${stages[stage].length !== 1 ? 's' : ''}
        </div>
        ${stages[stage].map(build => `
          <div style="background-color: var(--color-surface); padding: 12px; border-radius: var(--radius-sm); margin-bottom: 8px; cursor: pointer; border: 1px solid var(--color-card-border);" onclick="openBuildDetails('${build.buildId}')">
            <div style="font-weight: 500; margin-bottom: 4px;">${build.buildId}</div>
            <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">${build.technician}</div>
          </div>
        `).join('')}
      </div>
    `;
  });

  html += '</div>';
  workflowContent.innerHTML = html;
}

// Analytics
function updateAnalytics() {
  const completedBuilds = appData.builds.filter(b => b.status === 'completed');
  const inProgressBuilds = appData.builds.filter(b => b.status === 'in_progress');

  document.getElementById('stat-completed').textContent = completedBuilds.length;
  document.getElementById('stat-in-progress').textContent = inProgressBuilds.length;

  // Calculate averages
  if (completedBuilds.length > 0) {
    let totalCost = 0;
    let totalHours = 0;

    completedBuilds.forEach(build => {
      const hours = build.laborLog.reduce((sum, log) => sum + log.hours, 0);
      totalHours += hours;
      
      let bomCost = 0;
      appData.bomComponents.forEach(category => {
        category.components.forEach(comp => {
          bomCost += comp.quantity * comp.unitCost;
        });
      });
      
      totalCost += bomCost + (hours * appData.laborRate);
    });

    const avgCost = totalCost / completedBuilds.length;
    const avgHours = totalHours / completedBuilds.length;

    document.getElementById('stat-avg-cost').textContent = `$${avgCost.toFixed(0)}`;
    document.getElementById('stat-avg-hours').textContent = `${avgHours.toFixed(1)}h`;
  } else {
    document.getElementById('stat-avg-cost').textContent = '$0';
    document.getElementById('stat-avg-hours').textContent = '0h';
  }

  // Cost analysis table
  const costAnalysis = document.getElementById('cost-analysis-content');
  if (completedBuilds.length > 0) {
    let html = '<table><thead><tr><th>Build ID</th><th>Model</th><th>Parts Cost</th><th>Labor Hours</th><th>Labor Cost</th><th>Total Cost</th><th>Variance</th></tr></thead><tbody>';
    
    let bomCost = 0;
    appData.bomComponents.forEach(category => {
      category.components.forEach(comp => {
        bomCost += comp.quantity * comp.unitCost;
      });
    });

    completedBuilds.forEach(build => {
      const hours = build.laborLog.reduce((sum, log) => sum + log.hours, 0);
      const laborCost = hours * appData.laborRate;
      const totalCost = bomCost + laborCost;
      const variance = totalCost - bomCost;

      html += `<tr>
        <td><strong>${build.buildId}</strong></td>
        <td>${build.model}</td>
        <td>$${bomCost.toFixed(2)}</td>
        <td>${hours.toFixed(1)}h</td>
        <td>$${laborCost.toFixed(2)}</td>
        <td><strong>$${totalCost.toFixed(2)}</strong></td>
        <td style="color: ${variance > 0 ? 'var(--color-warning)' : 'var(--color-success)'};">$${variance.toFixed(2)}</td>
      </tr>`;
    });

    html += '</tbody></table>';
    costAnalysis.innerHTML = html;
  } else {
    costAnalysis.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No completed builds to analyze yet.</p>';
  }

  // Production history
  const historyContent = document.getElementById('production-history');
  if (appData.builds.length > 0) {
    let html = '<table><thead><tr><th>Build ID</th><th>Model</th><th>Status</th><th>Technician</th><th>Start Date</th><th>Completion Date</th></tr></thead><tbody>';
    
    appData.builds.forEach(build => {
      const statusClass = build.status === 'completed' ? 'status-completed' : 'status-in-progress';
      html += `<tr>
        <td><strong>${build.buildId}</strong></td>
        <td>${build.model}</td>
        <td><span class="status-badge ${statusClass}">${build.status.replace('_', ' ').toUpperCase()}</span></td>
        <td>${build.technician}</td>
        <td>${build.startDate}</td>
        <td>${build.completionDate || '-'}</td>
      </tr>`;
    });

    html += '</tbody></table>';
    historyContent.innerHTML = html;
  } else {
    historyContent.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: 20px;">No production history yet.</p>';
  }
}

// Modal Functions
function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('active');
  }
});