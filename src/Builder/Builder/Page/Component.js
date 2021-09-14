// @flow
import * as React from "react";
import { useState } from "react";

import { OPTIONS as paragraphOptions } from "../../components/Paragraph";
import { OPTIONS as titleOptions } from "../../components/Title";
import { OPTIONS as imageOptions } from "../../components/Image";
import { OPTIONS as productOptions } from "../../components/Product";

import type { Component as ComponentType } from "../../types";

import { Panel, Button } from "react-bulma-components";

type Props = {|
  component: ComponentType,
  onChange: (ComponentType) => void,
  onRemove: (ComponentType) => void,
|};

const componentsOptionsSchemas = Object.assign({}, paragraphOptions, titleOptions, imageOptions, productOptions)

export default function BuilderPageComponent({
  onChange,
  component,
  onRemove,
}: Props): React.Node {
  // Question 5
  // Ajouter la fonctionnalité d'édition du contenu d'un composant :
  // - Permettre d'ouvrir la modal lors du click sur le bouton edit
  // - Afficher un formulaire permettant d'éditer les options du composant
  // - Enregistrer les changements lorsque l'utilisateur cliques sur "Enregistrer"
  // Note: les changements ne doivent pas prendre effet tant que l'utilisateur n'a pas enregistrer
  const { componentId, options } = component;
  const [newOptions, setNewOptions] = useState(options)
  const [show, setShow] = useState(false);
  const onClose = () => setShow(!show);
  const handleChangeOptions = (event, option) => {
    setNewOptions((prevOptions) => ({
      ...prevOptions,
      [option[0]]: event.target.value
    }))
  }
  const save = () => {
    onChange({
      ...component,
      options: newOptions
    })
    onClose();
  }

  const formOptions = Object.entries(options).map((option) => {
    let type;
    switch(componentsOptionsSchemas[option[0]].type) {
      case 'string': type='text'; break
      case 'number': type='number'; break
      default: type='text'
    }
    return (
      <>
        <div className="has-text-weight-bold pt-2 pb-1">{componentsOptionsSchemas[option[0]].label}</div>
        <input
          className="input is-primary"
          type={type} value={newOptions[option[0]]}
          onChange={(event) => handleChangeOptions(event, option)}
          placeholder="Option"
        />
      </>
    )
  })

  return (
    <>
      <Panel color="warning">
        <Panel.Header>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{componentId}</div>
            <div>
              <Button onClick={() => setShow(!show)} size="small" style={{ marginRight: 5 }}>
                <span className="icon">
                  <i className="fas fa-edit"></i>
                </span>
              </Button>
              <Button
                onClick={() => onRemove(component)}
                size="small"
                color="danger"
              >
                <span className="icon">
                  <i className="fas fa-times"></i>
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
              <b>{componentsOptionsSchemas[optionName].label}</b>: {options[optionName] || "Empty"}
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
               {formOptions}
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
