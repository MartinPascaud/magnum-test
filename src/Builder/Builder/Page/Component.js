// @flow
import * as React from "react";
import { useState } from "react";

import type { Component as ComponentType } from "../../types";

import { Panel, Modal, Button, Form } from "react-bulma-components";

type Props = {|
  component: ComponentType,
  onChange: (ComponentType) => void,
  onRemove: (ComponentType) => void,
|};

export default function BuilderPageComponent({
  onChange,
  component,
  onRemove,
}: Props): React.Node {
  // Question 5
  // Ajouter la fonctionnalité d'édition du contenu d'un composant :
  // - Permettre d'ouvrir la modal lors du click sur le bouton edit
  // - Afficher un formulaire permettant d'éditer les options du composant
  // - Enregistrer les changements lorsque l'utilisateur clique sur "Enregistrer"
  // Note: les changements ne doivent pas prendre effet tant que l'utilisateur n'a pas enregistré

  const { componentId } = component;
  const [options, setOptions] = useState(component.options)
  const [show, setShow] = useState(false);
  const onClose = () => setShow(!show);
  const option = Object.entries(options)[0];
  const key = option[0]
  const [value, setValue] = useState(option[1])
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const save = () => {
    setOptions((prevOptions) => {
      return {
        ...prevOptions,
        content: value
      }
    })
    onClose();
  }

  return (
    <>
      <Panel color="warning">
        <Panel.Header>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{componentId}</div>
            <div>
              <Button onClick={() => setShow(!show)} size="small" style={{ marginRight: 5 }}>
                <span class="icon">
                  <i class="fas fa-edit"></i>
                </span>
              </Button>
              <Button
                onClick={() => onRemove(component)}
                size="small"
                color="danger"
              >
                <span class="icon">
                  <i class="fas fa-times"></i>
                </span>
              </Button>
            </div>
          </div>
        </Panel.Header>

        {Object.keys(options).map((optionName) => (
          <Panel.Block>
            <p
              style={{
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              <b>{optionName}</b>: {options[optionName] || "Empty"}
            </p>
          </Panel.Block>
        ))}
      </Panel>

      {show 
        ? 
          <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Options du composant {componentId}</p>
                <button className="delete" onClick={onClose} aria-label="close"></button>
              </header>
              <section className="modal-card-body">
                <div className="has-text-weight-bold">{key}</div>
                <input class="input is-primary" type="text" value={value} onChange={handleChange} placeholder="Text input"/>
              </section>
              <footer className="modal-card-foot is-justify-content-flex-end">
                <button className="button" onClick={onClose}>Annuler</button>
                <button className="button is-success" onClick={save}>Enregistrer</button>
              </footer>
            </div>
          </div>
        : 
          null
     }

    </>
  );
}
