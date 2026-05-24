import { useState } from "react";
import "./ConoceMas.css";

const PATIENTS = {
  "Ana García": {
    meds: [
      { casillero: "01", nombre: "Paracetamol", dosis: "500 mg", primeraToma: { fecha: "19/05/2026", hora: "08:00 AM" }, frecuencia: "Cada 8h", duracion: "5 días", proximaToma: { fecha: "24/05/2026", hora: "08:00 AM", status: "active" }, completadas: 8, omitidas: 1, totales: 15 },
      { casillero: "02", nombre: "Amoxicilina", dosis: "1 cápsula", primeraToma: { fecha: "19/05/2026", hora: "09:00 AM" }, frecuencia: "Cada 12h", duracion: "7 días", proximaToma: { fecha: "26/05/2026", hora: "09:00 PM", status: "warning" }, completadas: 10, omitidas: 0, totales: 14 },
      { casillero: "03", nombre: "Ibuprofeno", dosis: "400 mg", primeraToma: { fecha: "19/05/2026", hora: "07:00 AM" }, frecuencia: "Cada 6h", duracion: "3 días", proximaToma: { fecha: "22/05/2026", hora: "07:00 AM", status: "done" }, completadas: 12, omitidas: 0, totales: 12 },
      { casillero: "04", nombre: "Loratadina", dosis: "10 mg", primeraToma: { fecha: "19/05/2026", hora: "10:00 PM" }, frecuencia: "Cada 24h", duracion: "10 días", proximaToma: { fecha: "29/05/2026", hora: "10:00 PM", status: "active" }, completadas: 5, omitidas: 2, totales: 10 },
      { casillero: "05", nombre: "Omeprazol", dosis: "20 mg", primeraToma: { fecha: "19/05/2026", hora: "06:30 AM" }, frecuencia: "Cada 24h", duracion: "14 días", proximaToma: { fecha: "01/06/2026", hora: "06:30 AM", status: "active" }, completadas: 6, omitidas: 0, totales: 14 },
      { casillero: "06", nombre: "Vitamina C", dosis: "1 tableta", primeraToma: { fecha: "19/05/2026", hora: "08:30 AM" }, frecuencia: "Cada 24h", duracion: "30 días", proximaToma: { fecha: "17/06/2026", hora: "08:30 AM", status: "active" }, completadas: 2, omitidas: 0, totales: 30 },
    ],
  },
  "Carlos Mendoza": {
    meds: [
      { casillero: "01", nombre: "Metformina", dosis: "850 mg", primeraToma: { fecha: "15/05/2026", hora: "07:00 AM" }, frecuencia: "Cada 12h", duracion: "30 días", proximaToma: { fecha: "14/06/2026", hora: "07:00 PM", status: "active" }, completadas: 20, omitidas: 2, totales: 60 },
      { casillero: "02", nombre: "Enalapril", dosis: "10 mg", primeraToma: { fecha: "15/05/2026", hora: "08:00 AM" }, frecuencia: "Cada 24h", duracion: "30 días", proximaToma: { fecha: "14/06/2026", hora: "08:00 AM", status: "active" }, completadas: 5, omitidas: 0, totales: 30 },
      { casillero: "03", nombre: "Atorvastatina", dosis: "20 mg", primeraToma: { fecha: "15/05/2026", hora: "10:00 PM" }, frecuencia: "Cada 24h", duracion: "30 días", proximaToma: { fecha: "14/06/2026", hora: "10:00 PM", status: "warning" }, completadas: 4, omitidas: 1, totales: 30 },
      { casillero: "04", nombre: "Aspirina", dosis: "100 mg", primeraToma: { fecha: "15/05/2026", hora: "09:00 AM" }, frecuencia: "Cada 24h", duracion: "30 días", proximaToma: { fecha: "14/06/2026", hora: "09:00 AM", status: "active" }, completadas: 5, omitidas: 0, totales: 30 },
    ],
  },
  "Sofía Ramírez": {
    meds: [
      { casillero: "01", nombre: "Levotiroxina", dosis: "50 mcg", primeraToma: { fecha: "01/05/2026", hora: "06:00 AM" }, frecuencia: "Cada 24h", duracion: "60 días", proximaToma: { fecha: "30/06/2026", hora: "06:00 AM", status: "active" }, completadas: 18, omitidas: 1, totales: 60 },
      { casillero: "02", nombre: "Calcio + Vit D", dosis: "1 tableta", primeraToma: { fecha: "01/05/2026", hora: "12:00 PM" }, frecuencia: "Cada 12h", duracion: "60 días", proximaToma: { fecha: "30/06/2026", hora: "12:00 PM", status: "active" }, completadas: 36, omitidas: 0, totales: 120 },
      { casillero: "03", nombre: "Sertralina", dosis: "50 mg", primeraToma: { fecha: "01/05/2026", hora: "09:00 PM" }, frecuencia: "Cada 24h", duracion: "90 días", proximaToma: { fecha: "29/07/2026", hora: "09:00 PM", status: "active" }, completadas: 18, omitidas: 3, totales: 90 },
      { casillero: "04", nombre: "Ibuprofeno", dosis: "600 mg", primeraToma: { fecha: "18/05/2026", hora: "08:00 AM" }, frecuencia: "Cada 8h", duracion: "5 días", proximaToma: { fecha: "23/05/2026", hora: "08:00 AM", status: "done" }, completadas: 15, omitidas: 0, totales: 15 },
      { casillero: "05", nombre: "Ácido Fólico", dosis: "5 mg", primeraToma: { fecha: "01/05/2026", hora: "07:30 AM" }, frecuencia: "Cada 24h", duracion: "60 días", proximaToma: { fecha: "30/06/2026", hora: "07:30 AM", status: "warning" }, completadas: 16, omitidas: 2, totales: 60 },
    ],
  },
  "Miguel Torres": {
    meds: [
      { casillero: "01", nombre: "Azitromicina", dosis: "500 mg", primeraToma: { fecha: "18/05/2026", hora: "08:00 AM" }, frecuencia: "Cada 24h", duracion: "5 días", proximaToma: { fecha: "23/05/2026", hora: "08:00 AM", status: "active" }, completadas: 2, omitidas: 0, totales: 5 },
      { casillero: "02", nombre: "Prednisona", dosis: "20 mg", primeraToma: { fecha: "18/05/2026", hora: "07:00 AM" }, frecuencia: "Cada 24h", duracion: "7 días", proximaToma: { fecha: "25/05/2026", hora: "07:00 AM", status: "active" }, completadas: 2, omitidas: 0, totales: 7 },
      { casillero: "03", nombre: "Salbutamol", dosis: "2 puffs", primeraToma: { fecha: "18/05/2026", hora: "09:00 AM" }, frecuencia: "Cada 6h", duracion: "10 días", proximaToma: { fecha: "28/05/2026", hora: "09:00 PM", status: "warning" }, completadas: 8, omitidas: 1, totales: 40 },
    ],
  },
};

const statusLabel = { active: "Activo", warning: "Próximo", done: "Completado" };

function TecnoPill() {
  const patientNames = Object.keys(PATIENTS);
  const [selected, setSelected] = useState(patientNames[0]);
  const meds = PATIENTS[selected].meds;

  const totalCompletadas = meds.reduce((s, m) => s + m.completadas, 0);
  const totalOmitidas    = meds.reduce((s, m) => s + m.omitidas, 0);
  const totalTomas       = meds.reduce((s, m) => s + m.totales, 0);

  return (
    <div className="tecnopill-app">
      <header className="header-tabla">
        <div className="caregiver-info">
          <div className="caregiver-avatar">DR</div>
          <div>
            <div className="caregiver-name">Dra. Rosa Herrera</div>
            <div className="caregiver-role">Cuidadora responsable</div>
          </div>
        </div>

        <div className="patient-selector">
          <span className="patient-label">Paciente</span>
          <select
            className="patient-select"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {patientNames.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>
      </header>

      <div className="stats-bar">
        <div className="stat-card blue">
          <div className="stat-icon">💊</div>
          <div className="stat-info">
            <div className="stat-label">Medicamentos</div>
            <div className="stat-value">{meds.length}</div>
          </div>
        </div>
        <div className="stat-card green">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <div className="stat-label">Completadas</div>
            <div className="stat-value">{totalCompletadas}</div>
          </div>
        </div>
        <div className="stat-card red">
          <div className="stat-icon">⚠️</div>
          <div className="stat-info">
            <div className="stat-label">Omitidas</div>
            <div className="stat-value">{totalOmitidas}</div>
          </div>
        </div>
        <div className="stat-card amber">
          <div className="stat-icon">📋</div>
          <div className="stat-info">
            <div className="stat-label">Tomas totales</div>
            <div className="stat-value">{totalTomas}</div>
          </div>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th># Casillero</th>
              <th>Medicamento</th>
              <th>Primera toma</th>
              <th>Frecuencia</th>
              <th>Duración</th>
              <th>Próxima / Última toma</th>
              <th>Completadas</th>
              <th>Omitidas</th>
              <th>Totales</th>
            </tr>
          </thead>
          <tbody key={selected}>
            {meds.map((med) => (
              <tr key={med.casillero}>
                <td><span className="casillero">{med.casillero}</span></td>
                <td>
                  <span className="med-name">{med.nombre}</span>
                  <span className="med-dose">{med.dosis}</span>
                </td>
                <td>
                  <div className="date-cell">
                    <div className="date">{med.primeraToma.fecha}</div>
                    <div className="time">{med.primeraToma.hora}</div>
                  </div>
                </td>
                <td><span className="freq-badge">{med.frecuencia}</span></td>
                <td><span className="dur-text">{med.duracion}</span></td>
                <td>
                  <div className="next-dose">
                    <div>
                      <span className={`next-dot ${med.proximaToma.status}`} />
                      <span className="next-date">{med.proximaToma.fecha}</span>
                    </div>
                    <div className="next-time">{med.proximaToma.hora}</div>
                    <div className={`next-status ${med.proximaToma.status}`}>
                      {statusLabel[med.proximaToma.status]}
                    </div>
                  </div>
                </td>
                <td><span className="count-pill completed">{med.completadas}</span></td>
                <td><span className="count-pill omitted">{med.omitidas}</span></td>
                <td><span className="count-pill total">{med.totales}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="legend">
        <div className="legend-item">
          <div className="legend-dot" style={{ background: "#0a8a50" }} />
          Activo
        </div>
        <div className="legend-item">
          <div className="legend-dot" style={{ background: "#b45309" }} />
          Próxima toma cercana
        </div>
        <div className="legend-item">
          <div className="legend-dot" style={{ background: "#9ca3af" }} />
          Completado
        </div>
        <div className="legend-item">
          <div className="legend-dot" style={{ background: "#0a8a50" }} />
          Tomas completadas
        </div>
        <div className="legend-item">
          <div className="legend-dot" style={{ background: "#b91c1c" }} />
          Tomas omitidas
        </div>
        <div className="legend-item">
          <div className="legend-dot" style={{ background: "#1d4ed8" }} />
          Total programadas
        </div>
      </div>
    </div>
  );
}

export default TecnoPill;
